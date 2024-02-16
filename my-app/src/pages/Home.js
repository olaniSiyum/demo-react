import React, { useState } from 'react';
import CourseSummary from '../components/CourseSummary'
import courses from '../courses'


function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCourses = courses.filter(course => {
    return (
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="Home page">
      <header>
        <h1>Web development Online Course Site</h1>
        {/* Input field for searching course name */}
        <input
          type="text"
          placeholder="Search by course name or instructor..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </header>
      {/* Display filtered courses in a scrollable list */}
      <div className="course-list">
        {filteredCourses.map((course) => (
          <CourseSummary course={course} key={course.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
