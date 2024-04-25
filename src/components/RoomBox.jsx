import React, { useEffect, useState } from 'react';
import Ably from 'ably';

const RoomBox = ({ roomName }) => {
    const [inputText, setInputText] = useState('');
    const [ablyInstance, setAblyInstance] = useState(null);
    const [linksInText, setLinksInText] = useState([]);
    const [emailInText, setEmailInText] = useState([]);
    const [roomNameLocal, setRoomNameLocal] = useState("");
    const inputTextRef = React.useRef('');

    useEffect(() => {
        inputTextRef.current = inputText;
    }, [inputText]);
    useEffect(() => {
        const initializeAbly = async () => {
            try {
                console.log(process.env.REACT_APP_ABLY_API_KEY)
                const ably = new Ably.Realtime({ key: process.env.REACT_APP_ABLY_API_KEY });
                setAblyInstance((prev)=>{
                    if(prev == null){
                        return ably;
                    }
                    return prev;
                });
            } catch (error) {
                console.error('Error initializing Ably:', error);
            }
        };
        initializeAbly();
        return () => {
            if (ablyInstance) ablyInstance.close();
        };
    }, [ablyInstance]);

    useEffect(() => {
        if (!ablyInstance) return;

        const channel = ablyInstance.channels.get(roomName);

        const handleMessage = (message) => {
            console.log('Received message:', message);
            setRoomNameLocal(roomName);
            if (message.data.type === "please-send-text") {
                if (inputTextRef?.current?.length > 0 || window?.INPUT_TEXT?.length > 0) {
                    channel.publish('text', { type: 'text', text: inputTextRef.current || window.INPUT_TEXT });
                    console.log('Sending text on request :', inputTextRef.current || window.INPUT_TEXT);
                }
            } else {
                if (message.data.text && message.data.text.length > 0) {
                    setInputText((prev) => message.data.text);
                    window.INPUT_TEXT = message.data.text;
                }
            }
        };

        channel.subscribe('text', handleMessage);
        channel.publish('text', { type: 'please-send-text', text: inputTextRef.current });
        return () => {
            channel.unsubscribe('text', handleMessage);
        };
    }, [ablyInstance, roomName]);

    
    useEffect(() => {
        if (inputText.length > 0) {
            const urls = inputText.match(/(https?:\/\/[^\s]+)/g);
            const emails = inputText.match(/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/g);
            if (urls && urls.length > 0) {
                setLinksInText(urls);
            }
            if (emails && emails.length > 0) {
                setEmailInText(emails);
            }
        }
    }, [inputText])
    const handleSaveButtonClick = () => {
        if (!ablyInstance || !inputText) return;

        const channel = ablyInstance.channels.get(roomName);

        channel.publish('text', { type: 'text', text: inputText });

        // send a post request to the server
        fetch(process.env.REACT_APP_ABLY_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputText }),
        })
    };

    const handleClearButtonClick = () => {
        // setInputText('');
        alert(inputText)
    };

    return (
        <div className='bg-gray-200 w-full text-center'>
            <h1 className='text-4xl text-center w-full p-5'>
                <div className='text-2xl'>
                    <span
                        className='text-2xl font-bold text-blue-500 hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out'
                    >Room Name<br />(
                        <span className='text-xs'>
                            Default is the IP address of the user's device, you can change it here
                        </span>): </span><br />
                    <input type='text' value={
                        roomNameLocal
                    } onChange={
                        (e) => setRoomNameLocal(e.target.value)
                    } className='text-center p-2 border-2 border-gray-300 rounded-lg bg-gray-100' />
                </div>
                <div className='buttons flex justify-center items-center'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded ml-2 mt-5 text-lg'
                        onClick={() => {
                            window.location.href = `/${roomNameLocal}`
                        }}
                    >Join</button>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded ml-2 mt-5 text-lg'
                        onClick={()=>{
                            window.location.href = `/world`
                        }} 
                    >
                        Join World Server
                    </button>
                </div>
            </h1>

            {
                linksInText.length > 0 && (
                    <div className='
                    max-w-full m-auto w-[80%] text-left p-2 border-2 border-gray-300 rounded-lg bg-gray-100
                    '>
                        {
                            linksInText.map((link, index) => (
                                <a key={index} href={link} target='_blank' rel='noreferrer'
                                    className='text-blue-500 hover:underline block hover:text-blue-700 transition duration-300 ease-in-out'>{link}</a>
                            ))
                        }
                    </div>
                )
            }
            {
                emailInText.length > 0 && (
                    <div className='
                    max-w-full m-auto w-[80%] text-left p-2 border-2 border-gray-300 rounded-lg bg-gray-100
                    '>
                        {
                            emailInText.map((email, index) => (
                                <a key={index} href={`mailto:${email}`} target='_blank' rel='noreferrer'
                                    className='text-blue-500 hover:underline block hover:text-blue-700 transition duration-300 ease-in-out'>{email}</a>
                            ))
                        }
                    </div>
                )
            }
            <div className='flex justify-center'>
                <textarea
                    className='max-w-full min-h-60 p-2 min-w-[80%] focus:outline-none border-2 border-gray-300 rounded-lg
                    focus:border-blue-500 transition duration-300 ease-in-out'
                    placeholder='Type something here'
                    value={inputText}
                    onChange={
                        (e) => setInputText(e.target.value)
                    }

                ></textarea>
            </div>

            <div className='flex justify-center mt-4'>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
                    onClick={handleSaveButtonClick}
                >
                    Save
                </button>
                <button
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={handleClearButtonClick}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default RoomBox;
