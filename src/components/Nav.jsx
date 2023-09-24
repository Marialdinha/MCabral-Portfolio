export default function Nav() {

  return(
    <header>
    <div className="header">
        <h1> Marialda Cabral </h1>
        <div>
            <nav>
                <ul>
                    <li><a href="#about-me"> About Me</a></li>
                    <li><a href="#work"> Work</a></li>
                    <li><a href="#contact-me"> Contact Me</a></li>
                    <li><a href="#resume"> Resume</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

  );
}

// export default function Nav() {
//   const linkStyle = { border: '1px black', padding: '5px' };

//   return (
//     <nav className="main-header-menu">
//       <section
//         style={{
//           display: 'flex',
//           fontFamily: 'helvetica',
//           flexDirection: 'row',
//           alignItems: 'flex-start',
//           justifyContent: 'flex-start',
//         }}
//       >
//         <div style={linkStyle}>
//           <a href="#">Home</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#">Login</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#">Register</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#">About</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#">Contact</a>
//         </div>
//       </section>
//     </nav>
//   );
// }
