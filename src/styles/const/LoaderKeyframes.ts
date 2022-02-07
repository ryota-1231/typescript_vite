import { keyframes } from 'styled-components/macro';

/** 読み込み中：progress */
const loader = keyframes`
0%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.9),0.5em 0.86603em 0 0 rgba(114,114,122,0),0.0em 1em 0 0 rgba(114,114,122,0.2),-0.5em 0.86603em 0 0 rgba(114,114,122,0.2),-0.86603em 0.5em 0 0 rgba(114,114,122,0.2),-1em 0.0em 0 0 rgba(114,114,122,0.2),-0.86603em -0.5em 0 0 rgba(114,114,122,0.3),-0.5em -0.86603em 0 0 rgba(114,114,122,0.4),0.0em -1em 0 0 rgba(114,114,122,0.5),0.5em -0.86603em 0 0 rgba(114,114,122,0.6),0.86603em -0.5em 0 0 rgba(114,114,122,0.7),1em 0.0em 0 0 rgba(114,114,122,0.8)
}
8.33333%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.8),0.5em 0.86603em 0 0 rgba(114,114,122,0.9),0.0em 1em 0 0 rgba(114,114,122,0),-0.5em 0.86603em 0 0 rgba(114,114,122,0.2),-0.86603em 0.5em 0 0 rgba(114,114,122,0.2),-1em 0.0em 0 0 rgba(114,114,122,0.2),-0.86603em -0.5em 0 0 rgba(114,114,122,0.2),-0.5em -0.86603em 0 0 rgba(114,114,122,0.3),0.0em -1em 0 0 rgba(114,114,122,0.4),0.5em -0.86603em 0 0 rgba(114,114,122,0.5),0.86603em -0.5em 0 0 rgba(114,114,122,0.6),1em 0.0em 0 0 rgba(114,114,122,0.7)
}
16.66667% {
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.7),0.5em 0.86603em 0 0 rgba(114,114,122,0.8),0.0em 1em 0 0 rgba(114,114,122,0.9),-0.5em 0.86603em 0 0 rgba(114,114,122,0),-0.86603em 0.5em 0 0 rgba(114,114,122,0.2),-1em 0.0em 0 0 rgba(114,114,122,0.2),-0.86603em -0.5em 0 0 rgba(114,114,122,0.2),-0.5em -0.86603em 0 0 rgba(114,114,122,0.2),0.0em -1em 0 0 rgba(114,114,122,0.3),0.5em -0.86603em 0 0 rgba(114,114,122,0.4),0.86603em -0.5em 0 0 rgba(114,114,122,0.5),1em 0.0em 0 0 rgba(114,114,122,0.6)
}
25%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.6),0.5em 0.86603em 0 0 rgba(114,114,122,0.7),0.0em 1em 0 0 rgba(114,114,122,0.8),-0.5em 0.86603em 0 0 rgba(114,114,122,0.9),-0.86603em 0.5em 0 0 rgba(114,114,122,0),-1em 0.0em 0 0 rgba(114,114,122,0.2),-0.86603em -0.5em 0 0 rgba(114,114,122,0.2),-0.5em -0.86603em 0 0 rgba(114,114,122,0.2),0.0em -1em 0 0 rgba(114,114,122,0.2),0.5em -0.86603em 0 0 rgba(114,114,122,0.3),0.86603em -0.5em 0 0 rgba(114,114,122,0.4),1em 0.0em 0 0 rgba(114,114,122,0.5)
}
33.33333%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.5),0.5em 0.86603em 0 0 rgba(114,114,122,0.6),0.0em 1em 0 0 rgba(114,114,122,0.7),-0.5em 0.86603em 0 0 rgba(114,114,122,0.8),-0.86603em 0.5em 0 0 rgba(114,114,122,0.9),-1em 0.0em 0 0 rgba(114,114,122,0),-0.86603em -0.5em 0 0 rgba(114,114,122,0.2),-0.5em -0.86603em 0 0 rgba(114,114,122,0.2),0.0em -1em 0 0 rgba(114,114,122,0.2),0.5em -0.86603em 0 0 rgba(114,114,122,0.2),0.86603em -0.5em 0 0 rgba(114,114,122,0.3),1em 0.0em 0 0 rgba(114,114,122,0.4)
}
41.66667%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.4),0.5em 0.86603em 0 0 rgba(114,114,122,0.5),0.0em 1em 0 0 rgba(114,114,122,0.6),-0.5em 0.86603em 0 0 rgba(114,114,122,0.7),-0.86603em 0.5em 0 0 rgba(114,114,122,0.8),-1em 0.0em 0 0 rgba(114,114,122,0.9),-0.86603em -0.5em 0 0 rgba(114,114,122,0),-0.5em -0.86603em 0 0 rgba(114,114,122,0.2),0.0em -1em 0 0 rgba(114,114,122,0.2),0.5em -0.86603em 0 0 rgba(114,114,122,0.2),0.86603em -0.5em 0 0 rgba(114,114,122,0.2),1em 0.0em 0 0 rgba(114,114,122,0.3)
}
50%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.3),0.5em 0.86603em 0 0 rgba(114,114,122,0.4),0.0em 1em 0 0 rgba(114,114,122,0.5),-0.5em 0.86603em 0 0 rgba(114,114,122,0.6),-0.86603em 0.5em 0 0 rgba(114,114,122,0.7),-1em 0.0em 0 0 rgba(114,114,122,0.8),-0.86603em -0.5em 0 0 rgba(114,114,122,0.9),-0.5em -0.86603em 0 0 rgba(114,114,122,0),0.0em -1em 0 0 rgba(114,114,122,0.2),0.5em -0.86603em 0 0 rgba(114,114,122,0.2),0.86603em -0.5em 0 0 rgba(114,114,122,0.2),1em 0.0em 0 0 rgba(114,114,122,0.2)
}
58.33333%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.2),0.5em 0.86603em 0 0 rgba(114,114,122,0.3),0.0em 1em 0 0 rgba(114,114,122,0.4),-0.5em 0.86603em 0 0 rgba(114,114,122,0.5),-0.86603em 0.5em 0 0 rgba(114,114,122,0.6),-1em 0.0em 0 0 rgba(114,114,122,0.7),-0.86603em -0.5em 0 0 rgba(114,114,122,0.8),-0.5em -0.86603em 0 0 rgba(114,114,122,0.9),0.0em -1em 0 0 rgba(114,114,122,0),0.5em -0.86603em 0 0 rgba(114,114,122,0.2),0.86603em -0.5em 0 0 rgba(114,114,122,0.2),1em 0.0em 0 0 rgba(114,114,122,0.2)
}
66.66667%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.2),0.5em 0.86603em 0 0 rgba(114,114,122,0.2),0.0em 1em 0 0 rgba(114,114,122,0.3),-0.5em 0.86603em 0 0 rgba(114,114,122,0.4),-0.86603em 0.5em 0 0 rgba(114,114,122,0.5),-1em 0.0em 0 0 rgba(114,114,122,0.6),-0.86603em -0.5em 0 0 rgba(114,114,122,0.7),-0.5em -0.86603em 0 0 rgba(114,114,122,0.8),0.0em -1em 0 0 rgba(114,114,122,0.9),0.5em -0.86603em 0 0 rgba(114,114,122,0),0.86603em -0.5em 0 0 rgba(114,114,122,0.2),1em 0.0em 0 0 rgba(114,114,122,0.2)
}
75%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.2),0.5em 0.86603em 0 0 rgba(114,114,122,0.2),0.0em 1em 0 0 rgba(114,114,122,0.2),-0.5em 0.86603em 0 0 rgba(114,114,122,0.3),-0.86603em 0.5em 0 0 rgba(114,114,122,0.4),-1em 0.0em 0 0 rgba(114,114,122,0.5),-0.86603em -0.5em 0 0 rgba(114,114,122,0.6),-0.5em -0.86603em 0 0 rgba(114,114,122,0.7),0.0em -1em 0 0 rgba(114,114,122,0.8),0.5em -0.86603em 0 0 rgba(114,114,122,0.9),0.86603em -0.5em 0 0 rgba(114,114,122,0),1em 0.0em 0 0 rgba(114,114,122,0.2)
}
83.33333%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.2),0.5em 0.86603em 0 0 rgba(114,114,122,0.2),0.0em 1em 0 0 rgba(114,114,122,0.2),-0.5em 0.86603em 0 0 rgba(114,114,122,0.2),-0.86603em 0.5em 0 0 rgba(114,114,122,0.3),-1em 0.0em 0 0 rgba(114,114,122,0.4),-0.86603em -0.5em 0 0 rgba(114,114,122,0.5),-0.5em -0.86603em 0 0 rgba(114,114,122,0.6),0.0em -1em 0 0 rgba(114,114,122,0.7),0.5em -0.86603em 0 0 rgba(114,114,122,0.8),0.86603em -0.5em 0 0 rgba(114,114,122,0.9),1em 0.0em 0 0 rgba(114,114,122,0)
}
91.66667%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0),0.5em 0.86603em 0 0 rgba(114,114,122,0.2),0.0em 1em 0 0 rgba(114,114,122,0.2),-0.5em 0.86603em 0 0 rgba(114,114,122,0.2),-0.86603em 0.5em 0 0 rgba(114,114,122,0.2),-1em 0.0em 0 0 rgba(114,114,122,0.3),-0.86603em -0.5em 0 0 rgba(114,114,122,0.4),-0.5em -0.86603em 0 0 rgba(114,114,122,0.5),0.0em -1em 0 0 rgba(114,114,122,0.6),0.5em -0.86603em 0 0 rgba(114,114,122,0.7),0.86603em -0.5em 0 0 rgba(114,114,122,0.8),1em 0.0em 0 0 rgba(114,114,122,0.9)
}
100%{
  box-shadow:0.86603em 0.5em 0 0 rgba(114,114,122,0.9),0.5em 0.86603em 0 0 rgba(114,114,122,0),0.0em 1em 0 0 rgba(114,114,122,0.2),-0.5em 0.86603em 0 0 rgba(114,114,122,0.2),-0.86603em 0.5em 0 0 rgba(114,114,122,0.2),-1em 0.0em 0 0 rgba(114,114,122,0.2),-0.86603em -0.5em 0 0 rgba(114,114,122,0.3),-0.5em -0.86603em 0 0 rgba(114,114,122,0.4),0.0em -1em 0 0 rgba(114,114,122,0.5),0.5em -0.86603em 0 0 rgba(114,114,122,0.6),0.86603em -0.5em 0 0 rgba(114,114,122,0.7),1em 0.0em 0 0 rgba(114,114,122,0.8)
  }
`;

export default loader;