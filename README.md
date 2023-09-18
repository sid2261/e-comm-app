# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Whatever are the industry standards we get it from CSS baseline from Material UI.
- "sx" is used in typography to change the style inherited by material UI and provide your CSS style.
- "area-label" in IconButton is is used to specify the task that the icon is doing so that visually impared persons can listen what that icon does.
- In order to use the nested routes we use <Outlet/> component.
- Web kit is used to clamp or the reduce the text lines.
- Card property in material UI is used to make cards of the following items.
- Grid is used to display items in grids.
- We use redux when we want to do global state management.
- Whenever we want to dispatch an action such as product to cart we use dispatch function which comes from useDispatch hook coming from React Redux.
- Redux toolkit under the hood use imer.js which takes care of the state which remains immutable.
- useSelector is a another hook used in react redux
