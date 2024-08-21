import React, { useState } from "react";
import "./Announcements.css"; // Optional for styling

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Company Meeting",
      date: "2024-08-20",
      content: "Don’t forget the company-wide meeting at 10 AM.",
    },
    {
      id: 2,
      title: "Holiday Schedule",
      date: "2024-08-21",
      content: "Check the new holiday schedule in the HR portal.",
    },
    {
      id: 1,
      title: "Company Meeting",
      date: "2024-08-20",
      content: "Don’t forget the company-wide meeting at 10 AM.",
    },
    {
      id: 2,
      title: "Holiday Schedule",
      date: "2024-08-21",
      content: "Check the new holiday schedule in the HR portal.",
    },
    {
      id: 1,
      title: "Company Meeting",
      date: "2024-08-20",
      content: "Don’t forget the company-wide meeting at 10 AM.",
    },
    {
      id: 2,
      title: "Holiday Schedule",
      date: "2024-08-21",
      content: "Check the new holiday schedule in the HR portal.",
    },
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setNewAnnouncement({
      ...newAnnouncement,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAnnouncement.title && newAnnouncement.content) {
      setAnnouncements([
        ...announcements,
        {
          id: announcements.length + 1,
          title: newAnnouncement.title,
          date: new Date().toISOString().split("T")[0],
          content: newAnnouncement.content,
        },
      ]);
      setNewAnnouncement({ title: "", content: "" });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="announcements">
              <section id="heading-txt">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12 text-start">
                      <div class="heading-text-msg">
                        <h3 className="m-0">Announcements</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <ul>
                <div className="container">
                  <div className="row">
                    {announcements.map((announcement) => (
                      <div className="col-lg-4 mt-4">
                        <div className="shadow sechrcard">
                          <li key={announcement.id}>
                            <h5>{announcement.title}</h5>
                            <small>{announcement.date}</small>
                            <p>{announcement.content}</p>
                          </li>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ul>
              {/* <form onSubmit={handleSubmit}>
                <h3>Add New Announcement</h3>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={newAnnouncement.title}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="content"
                  placeholder="Content"
                  value={newAnnouncement.content}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Add Announcement</button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;
