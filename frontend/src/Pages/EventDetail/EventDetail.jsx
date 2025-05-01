import { useParams } from "react-router-dom"
export default function EventDetailPage() {
    const param = useParams();
    const id = param.eventID;
    return (
        <>
            <h1>EventDetail</h1>
            <h3>{id}</h3>
        </>
    )
}