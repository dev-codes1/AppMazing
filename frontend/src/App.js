import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">AppMazing</div>
        <input type="text" placeholder='Buscar Aplicaciones...' className='search-bar'/>
        <div className="menu">
          <a href="#">Inicio</a>
          <a href="#">Categorías</a>
          <a href="#">Añadir producto</a>
          <a href="#">Acerca de</a>
        </div>
      </nav>

      {/* Navbar */}
      <header className="header">
        <h1>Bienvenido a AppMazing</h1>
        <p>Soluciones frescas, creativas y con el potencial de transformar tu mundo. <br/>Descubre lo que nadie más ofrece y apoya el talento que está marcando la diferencia</p>
        <button className='header-btn'>Explorar Apps</button>
      </header>

      {/* Cuerpo Principal */}
      <main className='main-content'>
        <h2>Apps Populares</h2>
        <div className='app-list'>
          <div className='app-card'>
            <img src="\img\catalog.jpg" alt='App 1'/> {/* Aquí faltaría una imagen de la aplicación */}
            <h3>Catalog</h3>
            <p>Con Catalog emprendedores, pequeñas empresas y creadores pueden diseñar catálogos visualmente impactantes sin necesidad de conocimientos técnicos. Desde catálogos de productos hasta portafolios creativos, esta app ofrece plantillas personalizables, integración con imágenes y textos, y opciones para compartir en redes sociales, sitios web o por correo electrónico.</p>
            <p>Calificación: ★★★★☆</p>
            <button>Ir a Google Play Store</button>
          </div>
          <div className='app-card'>
            <img src="\img\FinanControl.jpg" alt='App 2'/> {/* Aquí faltaría una imagen de la aplicación */}
            <h3>FinanControl</h3>
            <p>La app perfecta para tomar el control de tus finanzas personales de forma fácil y rápida. <strong>FinanControl</strong> Registra tus gastos diarios, ingresa tus ingresos y obtén un balance mensual detallado. Con gráficos intuitivos y alertas personalizadas, FinanControl te ayuda a identificar patrones de consumo y planificar mejor tu presupuesto.</p>
            <p>Calificación: ★★★★☆</p>
            <button>Ir a Google Play Store</button>
          </div>
          <div className='app-card'>
          <img src="\img\agenda_itinerario.jpg" alt='App 3'/> {/* Aquí faltaría una imagen de la aplicación */}
            <h3>New Tinnerary</h3>
            <p>La app definitiva para planificar y gestionar tus itinerarios de manera rápida y organizada. Con <strong>New Tinnerary</strong>, puedes crear horarios detallados, añadir actividades, configurar recordatorios y visualizar tu día a día en un formato intuitivo. Ya sea para viajes, reuniones o tareas diarias, esta herramienta te ayuda a mantener todo bajo control.</p>
            <p>¡Simplifica tu planificación y haz que cada minuto cuente! 🚀</p>
            <p>Calificación: ★★★★☆</p>
            <button>Ir a Google Play Store</button>
          </div>
          <div className='app-card'>
          <img src="\img\tienda_Gamer.jpg" alt='App 4'/> {/* Aquí faltaría una imagen de la aplicación */}
            <h3>GameHeaven</h3>
            <p>El paraíso virtual para gamers. Con <strong>GameHaven</strong>, explora y compra todo lo que necesitas para tu experiencia gamer: consolas, accesorios, periféricos, ropa, decoración y más. Encuentra productos de tus juegos favoritos, ofertas exclusivas y personalizaciones únicas en un solo lugar.</p>
            <p>¡Equipa tu mundo gamer y lleva tu pasión al siguiente nivel! 🕹️</p>
            <p>Calificación: ★★★★☆</p>
            <button>Ir a Google Play Store</button>
          </div>
          <div className='app-card'>
          <img src="\img\whatsapp.png" alt='App 5'/> {/* Aquí faltaría una imagen de la aplicación */}
            <h3>WhatsApp</h3>
            <p>WhatsApp Messenger o simplemente WhatsApp es una aplicación de mensajería instantánea para teléfonos inteligentes</p>
            <p>Calificación: ★★★★★</p>
            <button onClick={() => window.open("https://play.google.com/store/search?q=whatsapp&c=apps&hl=es_CO", "_blank")}>
        Ir a Google Play Store
      </button>
          </div>
        </div>
      </main>

      {/* Pie de Página */}
      <footer className='footer'>
        <p>&copy; 2024 AppMazing. Todos los derechos reservados.</p>
        <p>
          <a href='#'>Política de privacidad</a> | <a href="#">Términos de uso</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
