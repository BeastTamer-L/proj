import { Header } from "../../components/Header";
import { Navigation_Bar } from "../../components/NavigationBar";
import './teacher_schedule.css';
import {TeacherSchedule_Gr7} from "../../components/admin_comp/TeacherSchedule_Grade7"
import {TeacherSchedule_Gr8} from "../../components/admin_comp/TeacherSchedule_Grade8"
import {TeacherSchedule_Gr9} from "../../components/admin_comp/TeacherSchedule_Grade9"
import {TeacherSchedule_Gr10} from "../../components/admin_comp/TeacherSchedule_Grade10"
export const Teacher_Schedule = () => {
    return (
        <>
            <Header userRole="teacher" />
            <Navigation_Bar userRole="teacher" />
            <div className="teacherScheduleContainer">
                <h2>Daily Schedule</h2>
                <div className="scheduleArea">
                    <div className="scheduleContainer">
                        <TeacherSchedule_Gr7 />
                    </div>
                </div>
            </div>
        </>
    )
}