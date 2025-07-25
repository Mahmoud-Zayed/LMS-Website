import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Footer from "../../components/student/Footer";
import { Line, Circle } from "rc-progress";

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } =
    useContext(AppContext);
  // eslint-disable-next-line no-unused-vars
  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 8, totalLectures: 9 },
    { lectureCompleted: 4, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 3 },
    { lectureCompleted: 8, totalLectures: 10 },
    { lectureCompleted: 7, totalLectures: 9 },
    { lectureCompleted: 3, totalLectures: 3 },
    { lectureCompleted: 3, totalLectures: 7 },
  ]);
  return (
    <>
      <div className="md:px-36 px-8 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border border-gray-500/20 mt-10">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-md:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {enrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-500/20">
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                  <img
                    className="w-14 sm:w-24 md:w-28"
                    src={course.courseThumbnail}
                    alt=""
                  />
                  <div className="flex-1">
                    <p className="mb-1 max-md:text-sm">{course.courseTitle}</p>
                    <Line
                      strokeWidth={1.5}
                      percent={
                        progressArray[index]
                          ? (progressArray[index].lectureCompleted * 100) /
                            progressArray[index].totalLectures
                          : 0
                      }
                      className="bg-gray-300 rounded-full"
                    ></Line>
                  </div>
                </td>
                <td className="px-4 py-3 max-md:hidden">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-md:hidden">
                  {progressArray[index] &&
                    `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`}{" "}
                  <span>Lectures</span>
                </td>
                <td className="px-4 py-3 max-md:text-right">
                  <button
                    onClick={() => navigate("/player/" + course._id)}
                    className="cursor-pointer px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white"
                  >
                    {progressArray[index] &&
                    progressArray[index].lectureCompleted /
                      progressArray[index].totalLectures ===
                      1
                      ? " Completed"
                      : "On Going"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyEnrollments;
