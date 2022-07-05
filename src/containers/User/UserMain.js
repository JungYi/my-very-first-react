import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Gnb from '../../components/Gnb';
import Header from '../../components/Header';
import Modal from '../../components/Modal';

function UserMain(props) {
  //useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div>
      <Header />
      <Gnb day={props.day}/>
      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="modalll heading">
        안녕하십니까모모모모달
      </Modal>
      <Footer />
    </div>
  );
}

export default UserMain;