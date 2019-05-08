import React, { Component } from "react";
import Modal from "react-modal";
import VehicleBox from "./vehicles/VehicleBox";
import { generateImageUrl } from "../utils/urls";
import { loadVehicles } from "../store/actions";
import { connect } from "react-redux";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Home extends Component {
  state = {
    modalIsOpen: false,
    clickedImageUrl: ""
  };

  componentDidMount = () => {
    this.props.onLoadVehicles();
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleImageClick = el => {
    const url = generateImageUrl(el.imageName);
    this.setState({ clickedImageUrl: url });
    this.openModal();
  };

  handleButtonClick = (event, element) => {
    event.preventDefault();
    this.props.history.push(`/vehicles/rent/${element.id}`);
  };

  renderVehicleBoxes = () => {
    return this.props.vehicles.map(el => (
      <VehicleBox
        key={el.id}
        vehicle={el}
        onImageClick={() => this.handleImageClick(el)}
        onButtonClick={e => this.handleButtonClick(e, el)}
      />
    ));
  };

  render() {
    return (
      <div className="text-center">
        <h1>Welcome to We Rent-A-Car 123</h1>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={this.state.clickedImageUrl} alt="" />
        </Modal>
        <div className="row">{this.renderVehicleBoxes()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { vehicles } = state;
  return { vehicles };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadVehicles: () => dispatch(loadVehicles())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
