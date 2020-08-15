import React, { Fragment } from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import { RoomConsumer } from "../context";
import Loading from "./Loading";
import { withRoomConsumer } from "../context";

// second way to access context
function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
      </Fragment>
    );
  }
}

export default withRoomConsumer(RoomsContainer);

//one way to access context
// const RoomsContainer = () => {
//   return (
//     //@3.35.27
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         } else {
//           return (
//             <div>
//               <h1> Rooms Container Hello</h1>
//               <RoomsFilter rooms={rooms} />
//               <RoomsList rooms={sortedRooms} />
//             </div>
//           );
//         }
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomsContainer;
