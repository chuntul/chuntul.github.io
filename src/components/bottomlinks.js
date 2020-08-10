import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../styles/colors';

import resume from '../images/resume.png';
import github from '../images/github.png';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import resumeFile from '../files/resume.pdf';

const StyledBottomLinks = styled.div`
    position:fixed;
    bottom:5vh;
    right:5vh;

    img {
        width: calc(1vw + 1.2em);
        margin-left: 1vw;
    }
`;
const useStyles = makeStyles({
  tooltip: {
    fontSize: 'calc(0.5vw + 0.6em)',
    marginBottom: 'calc(0.9vw + 0.9em)',
    background: colors.main_text_light,
  },
});

const BottomLinks = () => {
  const logos = [resume, github, email, linkedin];
  const links = [resumeFile, 'https://github.com/chuntul', 'mailto:chantal.ho98@hotmail.com', 'https://www.linkedin.com/in/chantal-ho-629939137/'];
  const linkNames = ['resume', 'github: chuntul', 'email: chantal.ho98@hotmail.com', 'linkedin'];

  // styles for tooltip
  const classes = useStyles();
  return (
    <StyledBottomLinks>
      {logos.map((x, i) => (
        <Tooltip
          classes={{
            tooltip: classes.tooltip,
          }}
          TransitionComponent={Zoom}
          title={linkNames[i]}
        >
          <a target="_blank" rel="noreferrer" href={links[i]}>
            <img alt={linkNames[i]} src={x} />
          </a>
        </Tooltip>
      ))}
    </StyledBottomLinks>
  );
};

export default BottomLinks;
