import ProfileCard from "./components/ProfileCard";

import { FaPhone, FaEnvelope, FaBriefcase, FaUsers, FaMapMarkerAlt, FaBullseye } from "react-icons/fa";

function App() {
  const team = [
    {
      photo: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&auto=format&fit=crop",
      name: "Sarah Johnson",
      position: "Customer Support",
      details: [
        { icon: <FaPhone />, text: "+1 234 567 8901" },
        { icon: <FaEnvelope />, text: "sarah@example.com" },
      ],
      buttons: [
        { label: "Message", bgColor: "bg-blue-600", onClick: () => alert("Message Sarah") },
        { label: "Call", bgColor: "bg-blue-800", onClick: () => alert("Call Sarah") },
      ],
    },
    {
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop",
      name: "David Kim",
      position: "Project Manager",
      details: [
        { icon: <FaBriefcase />, text: "5+ Years Experience" },
        { icon: <FaUsers />, text: "Team Leader" },
      ],
      buttons: [
        { label: "Profile", bgColor: "bg-purple-600", onClick: () => alert("View Profile") },
        { label: "Email", bgColor: "bg-purple-800", onClick: () => alert("Email David") },
      ],
    },
    {
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop",
      name: "Jessica Lee",
      position: "UI/UX Designer",
      details: [
        { icon: "⭐".repeat(5), text: "Top Rated" },
        { icon: <FaBriefcase />, text: "350+ Projects" },
      ],
      buttons: [
        { label: "Portfolio", bgColor: "bg-green-600", onClick: () => alert("Open Portfolio") },
        { label: "Email", bgColor: "bg-green-800", onClick: () => alert("Email Jessica") },
      ],
    },
    {
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop",
      name: "Mark Wilson",
      position: "Sales Executive",
      details: [
        { icon: <FaBullseye />, text: "Top Performer" },
        { icon: <FaMapMarkerAlt />, text: "New York, USA" },
      ],
      buttons: [
        { label: "Connect", bgColor: "bg-orange-600", onClick: () => alert("Connect with Mark") },
        { label: "Email", bgColor: "bg-orange-800", onClick: () => alert("Email Mark") },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8 flex flex-wrap justify-center gap-8">
      {team.map((member, idx) => (
        <ProfileCard
          key={idx}
          photo={member.photo}
          name={member.name}
          position={member.position}
          details={member.details}
          buttons={member.buttons}
        />
      ))}
    </div>
  );
}

export default App;
