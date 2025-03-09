import { useEffect, useState } from "react";
import { getSchedule } from "../../../services/scheduleService";
import { useWebSocket } from "../../../services/webSocketService";

const ScheduleTable = ({ classId }) => {
    const [schedule, setSchedule] = useState([]);

    useWebSocket(setSchedule); // Kết nối WebSocket để nhận cập nhật real-time

    useEffect(() => {
        getSchedule(classId).then(setSchedule);
    }, [classId]);

    return (
        <div>
            <h2>Thời khóa biểu</h2>
            {schedule.map((day) => (
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
            ))}
        </div>
    );
};

export default ScheduleTable;
