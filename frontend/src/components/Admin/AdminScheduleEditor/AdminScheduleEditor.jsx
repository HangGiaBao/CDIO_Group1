import { useEffect, useState } from "react";
import { getSchedule, updateSchedule } from "../../../services/scheduleService";
import { socket, useWebSocket } from "../../../services/webSocketService";

const AdminScheduleEditor = ({ classId }) => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        getSchedule(classId).then(setSchedule);
    }, [classId]);

    // Kích hoạt WebSocket để cập nhật UI khi có thay đổi
    useWebSocket(setSchedule);

    const handleEdit = (dayIndex, sessionIndex, field, value) => {
        const newSchedule = [...schedule];
        newSchedule[dayIndex].sessions[sessionIndex][field] = value;
        setSchedule(newSchedule);
    };

    const handleSave = async (id, updatedData) => {
        const updatedSchedule = await updateSchedule(id, updatedData);
        socket.emit("scheduleUpdated", updatedSchedule); // Gửi cập nhật real-time
    };

    return (
        <div>
            {schedule.map((day, dayIndex) => (
                <div key={day._id}>
                    <h3>{day.day}</h3>
                    {day.sessions.map((session, sessionIndex) => (
                        <div key={session._id}>
                            <input
                                type="text"
                                value={session.startTime}
                                onChange={(e) => handleEdit(dayIndex, sessionIndex, "startTime", e.target.value)}
                            />
                            <input
                                type="text"
                                value={session.endTime}
                                onChange={(e) => handleEdit(dayIndex, sessionIndex, "endTime", e.target.value)}
                            />
                            <input
                                type="text"
                                value={session.activity}
                                onChange={(e) => handleEdit(dayIndex, sessionIndex, "activity", e.target.value)}
                            />
                            <button onClick={() => handleSave(day._id, day)}>Lưu</button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AdminScheduleEditor;
