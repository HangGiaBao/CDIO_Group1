const API_URL = "http://localhost:5001/v1/schedule";

export const getSchedule = async (classId) => {
    const response = await fetch(`${API_URL}/${classId}`);
    return response.json();
};

export const updateSchedule = async (id, updatedData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
    });

    return response.json();
};
