import React, {useState} from "react";
import FileInput from "../components/UI/input/FileInput/FileInput";
import TimePickerInput from "../components/UI/input/TimePickerInput/TimePickerInput";
import PrimaryButton from "../components/UI/button/PrimaryButton";
import axios from "axios";


function Main() {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [file, setFile] = useState(null);


    const handleStartChange = (event) => {
        setStart(event.target.value);
    };

    const handleEndChange = (event) => {
        setEnd(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);

        console.log(file)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("timings", new Blob([JSON.stringify({
                "start": start,
                "end": end
            })], {
                type: "application/json"
            }
        ))
        formData.append("file", file);

        const uploadModel = {start, end, file}
        console.log(uploadModel)
        console.log(formData)

        try {
            const response = await axios({
                method: "POST",
                url: "http://localhost:8080/audio/test",
                data: formData,
                headers: {
                    "Content-Type": undefined
                }
            })
            console.log("RESPONSE")
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className='cut-form'>
                <FileInput onChange={handleFileChange}/>

                <label style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    Начало:
                    <TimePickerInput onChange={handleStartChange}/>
                </label>
                <label style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    Конец:
                    <TimePickerInput onChange={handleEndChange}/>
                </label>

                <PrimaryButton type="submit">Обрезать</PrimaryButton>
            </form>
        </div>

    );
}

export default Main;
