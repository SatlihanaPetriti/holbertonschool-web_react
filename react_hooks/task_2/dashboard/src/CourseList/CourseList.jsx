/* eslint-disable */
import { Fragment } from "react";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";
import WithLogging from "../HOC/WithLogging";

const CourseList = ({ courses = [], onLogout }) => {
    return (
        <Fragment>
            <h4>Click here to logout <button onClick={onLogout}>logout</button> </h4>
            <table id={"CourseList"} className="course-list">
                {courses.length > 0 ? (
                    <>
                        <thead>
                            <CourseListRow isHeader={true} textFirstCell={"Available courses"} />
                            <CourseListRow
                                isHeader={true}
                                textFirstCell={"Course Name"}
                                textSecondCell="Credit"
                            />
                        </thead>

                        <tbody>
                            {courses.map((course) => (
                                <CourseListRow
                                    key={course.id}
                                    textFirstCell={course.name}
                                    textSecondCell={course.credit}
                                />
                            ))}
                        </tbody>
                    </>
                ) : (
                    <tbody className="no-courses">
                        <tr>
                            <td>No course available yet</td>
                        </tr>
                    </tbody>
                )}
            </table>
        </Fragment>
    );
};

export default WithLogging(CourseList);