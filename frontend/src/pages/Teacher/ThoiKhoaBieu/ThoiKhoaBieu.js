import { useEffect, useState } from "react";
import { getSchedule } from "../../../services/scheduleService";
import { useWebSocket } from "../../../services/webSocketService";

const UserSchedule = ({ classId }) => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const data = await getSchedule(classId);
                setSchedule(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Lỗi khi lấy thời khóa biểu:", error);
                setSchedule([]);
            }
        };

        fetchSchedule();
    }, [classId]);

    useWebSocket(setSchedule); // Lắng nghe thay đổi từ WebSocket

    return (
        <div>
            <h2>Thời Khóa Biểu</h2>
            {schedule.length > 0 ? (
                schedule.map((day) => (
                    <div key={day._id}>
                        <h3>{day.day}</h3>
                        <ul>
                            {day.sessions.map((session) => (
                                <li key={session._id}>
                                    {session.startTime} - {session.endTime}: {session.activity}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Không có thời khóa biểu.</p>
            )}
        </div>
    );
};

export default UserSchedule;
