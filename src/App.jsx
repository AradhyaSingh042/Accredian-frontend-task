import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modal from "./components/Modal";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modal, setModal] = useState(1);

  return (
    <>
      <div className={`wrapper w-full h-screen overflow-x-hidden`}>
        <Navbar />
        <Hero setIsModalVisible={setIsModalVisible} />
        <Modal
          page={modal}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setModal={setModal}
        />
      </div>
    </>
  );
};

export default App;
