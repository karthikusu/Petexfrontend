// import { BellFilled, MailOutlined } from "@ant-design/icons";
// import { Badge, Drawer, Image, List, Space, Typography } from "antd";
// import { useEffect, useState } from "react";
// // import petex from './petcare logo.jpg';

// function AppHeader() {
//   const [comments, setComments] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [commentsOpen, setCommentsOpen] = useState(false);
//   const [notificationsOpen, setNotificationsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async (url, setData) => {
//     try {
//       setLoading(true);
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
//       }
//       const data = await response.json();
//       setData(data);
//       setError(null);
//     } catch (error) {
//       setError(`Error fetching data: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData('http://localhost:9030/petex/getAll', setComments);
//     fetchData('http://localhost:9030/petex/getAll', setNotifications);
//   }, []);

//   return (
//     <div className="navbar" style={{backgroundColor:"rgb(161, 158, 255)", borderRadius:"8px"}}>
//       <div className="logo">
//         {/* <img src={petex} style={{width:"60px", height:"60px", borderRadius:"50%", marginLeft:"60%"}}/> */}
      
//       </div>
//       <Typography.Title style={{color:"black", marginLeft:"-50%"}}>Admin Dashboard</Typography.Title>
//       <div className="nav-items">
//         <Badge count={comments.length} dot
//         style={{marginRight:"50px"}}>
//           <MailOutlined
//             style={{ fontSize: 24, cursor: "pointer" , marginRight:"50px"}}
//             onClick={() => setCommentsOpen(true)}
//           />
//         </Badge>
//         <Badge count={notifications.length}
//         style={{marginRight:"50px"}}>
//           <BellFilled
//             style={{ fontSize: 24, cursor: "pointer" , marginRight:"50px"}}
//             onClick={() => setNotificationsOpen(true)}
//           />
//         </Badge>
//       </div>
//       <Drawer
//         title="Comments"
//         placement="right"
//         width={400}
//         closable={true}
//         onClose={() => setCommentsOpen(false)}
//         visible={commentsOpen}
//       >
//         {loading ? (
//           <p>Loading comments...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : (
//           <List
//             dataSource={comments}
//             renderItem={(item) => <List.Item>{item.body}</List.Item>}
           
//           />
//         )}
//       </Drawer>
//       <Drawer
//         title="Notifications"
//         placement="right"
//         width={400}
//         closable={true}
//         onClose={() => setNotificationsOpen(false)}
//         visible={notificationsOpen}
        
//       >
//         {loading ? (
//           <p>Loading notifications...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : (
//           <List
//             dataSource={notifications}
//             renderItem={(item) => (
//               <List.Item>
//                 <Typography.Text strong>{item.title}</Typography.Text> has been ordered!
//               </List.Item>
//             )}
//           />
//         )}
//       </Drawer>
//     </div>
//   );
// }

// export default AppHeader;

import React, { useEffect, useState } from "react";
import { Badge, Drawer, List, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    fetchData('http://localhost:9030/petex/getAll', setComments);
    fetchData('http://localhost:9030/petex/getAll', setNotifications);

    // Update date and time every second
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const fetchData = async (url, setData) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="navbar" style={styles.navbar}>
      <div className="logo">
        {/* Your logo or image */}
      </div>
      <Typography.Title style={styles.title}>Admin Dashboard</Typography.Title>
      <div className="nav-items" style={styles.navItems}>
        <Badge count={comments.length} dot>
          <MailOutlined style={styles.icon} onClick={() => setCommentsOpen(true)} />
        </Badge>
        <Badge count={notifications.length}>
          <BellFilled style={styles.icon} onClick={() => setNotificationsOpen(true)} />
        </Badge>
        <Typography.Text style={styles.dateTime}>{dateTime.toLocaleString()}</Typography.Text>
      </div>
      <Drawer
        title="Comments"
        placement="right"
        width={400}
        closable={true}
        onClose={() => setCommentsOpen(false)}
        visible={commentsOpen}
      >
        {loading ? (
          <p>Loading comments...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <List dataSource={comments} renderItem={(item) => <List.Item>{item.body}</List.Item>} />
        )}
      </Drawer>
      <Drawer
        title="Notifications"
        placement="right"
        width={400}
        closable={true}
        onClose={() => setNotificationsOpen(false)}
        visible={notificationsOpen}
      >
        {loading ? (
          <p>Loading notifications...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <List dataSource={notifications} renderItem={(item) => (
            <List.Item>
              <Typography.Text strong>{item.title}</Typography.Text> has been ordered!
            </List.Item>
          )} />
        )}
      </Drawer>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: "white",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    marginLeft:"4%"
  },
  title: {
    color: "black",
  },
  navItems: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    cursor: "pointer",
    marginRight: "20px",
  },
  dateTime: {
    marginLeft: "20px",
  },
};

export default AppHeader;

