
import { useParams } from 'react-router-dom';
import RoomBox from '../components/RoomBox';

const Room = () => {
    const { id } = useParams();

    return (
        <div className='bg-gray-200 w-full'>
            <RoomBox roomName={id} />
        </div>
    );

};

export default Room;
