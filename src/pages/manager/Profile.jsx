import React, { useEffect, useState } from "react";
import { GET_PROFILE } from "../../api/Api";
import { isLoader, IsToast } from "../../store/actions";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    phone: "",
    age: "",
    email: "",
    username: "",
    role: "",
  });

  const [user, setUser] = useState({
    profile_photo: "",
  });

  const [profileImageFile, setprofileImageFile] = useState();

  const profileUpload = async (e) => {
    setprofileImageFile(e.target.files[0]);
    const [file] = document.getElementById("newProfilePhoto").files;
    if (file) {
      //   const customConfig = {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //       // "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   };
      //   let postImage = {
      //     profile_photo: e.target.files[0],
      //   };
      //   dispatch(isLoader(true));
      //   await axios
      //     .post(
      //       `${process.env.REACT_APP_API_URL}/api/update-profile-photo-admin`,
      //       postImage,
      //       customConfig
      //     )
      //     .then((res) => {
      //       axios
      //         .get(`${process.env.REACT_APP_API_URL}/api/get-user`, {
      //           headers: { Authorization: `Bearer ${token}` },
      //         })
      //         .then((res) => {
      //           dispatch(userData(res.data.user));
      //         })
      //         .catch((err) => {
      //           dispatch(isLoader(false));
      //           // navigate("/login")
      //         });
      //     })
      //     .catch((err) => {
      //       dispatch(isLoader(false));
      //       console.log(err);
      //     });
      let image_url = URL.createObjectURL(file);
      dispatch(IsToast("Profile picture updated Successfully!"));
      setUser({ ...user, profile_photo: image_url });
      dispatch(isLoader(false));
    }
  };

  const getProfile = async () => {
    try {
      const response = await GET_PROFILE();
      if (response) {
        setData({
          firstname: response.data.user.name,
          lastname: "",
          gender: "",
          phone: "",
          age: "",
          email: response.data.user.email,
          username: "",
          role: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className="container">
        <section className="pt-4">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex justify-content-center">
                <div className="pic-holder-account">
                  <img
                    src={user.profile_photo}
                    alt="UploadPhoto"
                    id="blah1"
                    className="pic"
                  />
                  <label
                    htmlFor="newProfilePhoto"
                    className="upload-file-block"
                  >
                    <input
                      id="newProfilePhoto"
                      className="form-control"
                      type="file"
                      onChange={profileUpload}
                      accept="image/*"
                    />
                    <span className="text-center">
                      <i className="fa fa-camera fa-2x"></i>
                      <br />
                      Update <br /> Profile Photo
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="new_section shadow">
                <div className="new_section_inner">
                  <div className="readonly-form w-100">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="basicinfo">First Name</p>
                        <h6 className="basicdata">{data.firstname}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="basicinfo">Last Name</p>
                        <h6 className="basicdata">{data.lastname}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="basicinfo">Gender</p>
                        <h6 className="basicdata">{data.gender}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="basicinfo">Phone Number</p>
                        <h6 className="basicdata">{data.phone}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="basicinfo">Age</p>
                        <h6 className="basicdata">{data.age}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="basicinfo">Email</p>
                        <h6 className="basicdata">{data.email}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="basicinfo">Username</p>
                        <h6 className="basicdata">{data.username}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="basicinfo">User Role</p>
                        <h6 className="basicdata">{data.role}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
