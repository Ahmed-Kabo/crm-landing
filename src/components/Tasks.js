import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import IconTask from "../assets/icontask.png";
import taksImage from "../assets/maintask.svg";
const Tasks = () => {
  return (
    <TaskesStyled>
      <Container>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="taskesContent">
              <h2 className="mb-5">Do Your Task Easily</h2>
              <div className="taskesList">
                <div className="row mb-3">
                  <div className="col-2 text-left">
                    <div className="icon">
                      <img src={IconTask} alt="" />
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="task-content">
                      <p>
                        Sodales a pellentesque vel, pharetra quis elit. In
                        scelerisque lacinia diam eget egestas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-2 text-left">
                    <div className="icon">
                      <img src={IconTask} alt="" />
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="task-content">
                      <p>
                        Sodales a pellentesque vel, pharetra quis elit. In
                        scelerisque lacinia diam eget egestas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-2 text-left">
                    <div className="icon">
                      <img src={IconTask} alt="" />
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="task-content">
                      <p>
                        Sodales a pellentesque vel, pharetra quis elit. In
                        scelerisque lacinia diam eget egestas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="main-btn">GET IT NOW</Button>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="tasks__image">
              <img src={taksImage} alt="task" className="w-100" />
            </div>
          </div>
        </div>
      </Container>
    </TaskesStyled>
  );
};

const TaskesStyled = styled.section`
  padding: 4rem 0;
  h2 {
    font-weight: bold;
  }
  p {
    color: var(--lightBlue);
  }

  .main-btn {
    background: var(--secoundColor);
    border-color: var(--secoundColor);
    width: 160px;
    height: 50px;
    border-radius: 0.5rem;
    letter-spacing: 1.5px;
    transition: all 0.3s;
    &:hover {
      background: var(--mainColor);
      border-color: var(--mainColor);
      color: var(--dark);
      box-shadow: 0 10px 30px rgba(var(--mainColor), 10%);
    }
  }
`;

export default Tasks;
