import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #171429;

  --green: #0BAB51;
  --green-light: #13D468;

  --shapes: #221E34;

  --text-title: #ffffff;
  --text-body: #ffffff;

  --yellow: #F2C94C;
  --red: #e52e4d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { //1rem = 16px 
  @media(max-width: 1080px) {
    font-size: 93.75%; //15px
  }
  @media(max-width: 720px) {
    font-size: 87.50%; //14px
  }

}

body {
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: var(--text-title);

  &:hover {
    color: var(--text-title)
  }

  &:active {
    color: var(--text-title)
  }

  &:visited {
    color: none;
  }
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
