// import React from "react";
// import "../../styles/our-member.css";
// import { Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import akash from "../../assets/all-images/akash.jpg";
// import jayesh from "../../assets/all-images/jayesh.jpeg";

// const OUR__MEMBERS = [
//   {
//     name: "Akash Gund",
//     experience: "1 years of experience",
//     fbUrl: "#",
//     instUrl: "#",
//     twitUrl: "#",
//     linkedinUrl: "#",
//     imgUrl: akash,
//   },

//   {
//     name: "Jayesh Thombare",
//     experience: "1 years of experience",
//     fbUrl: "#",
//     instUrl: "#",
//     twitUrl: "#",
//     linkedinUrl: "#",
//     imgUrl: jayesh,
//   },

// ];

// const OurMembers = () => {
//   return (
//     <>
//       {OUR__MEMBERS.map((item, index) => (
//         <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
//           <div className="single__member">
//             <div className="single__member-img">
//               <img src={item.imgUrl} alt="" className="w-100" />

//               <div className="single__member-social">
//                 <Link to={item.fbUrl}>
//                   <i class="ri-facebook-line"></i>
//                 </Link>
//                 <Link to={item.twitUrl}>
//                   <i class="ri-twitter-line"></i>
//                 </Link>

//                 <Link to={item.linkedinUrl}>
//                   <i class="ri-linkedin-line"></i>
//                 </Link>

//                 <Link to={item.instUrl}>
//                   <i class="ri-instagram-line"></i>
//                 </Link>
//               </div>
//             </div>

//             <h6 className="text-center mb-0 mt-3">{item.name}</h6>
//             <p className="section__description text-center">
//               {item.experience}
//             </p>
//           </div>
//         </Col>
//       ))}
//     </>
//   );
// };

// export default OurMembers;
