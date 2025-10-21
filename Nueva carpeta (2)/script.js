// Base de datos de productos con imágenes reales de la web
const productos = [
    {
        id: 1,
        nombre: "Hamburguesa Clásica",
        descripcion: "Deliciosa hamburguesa con carne, queso, lechuga y tomate",
        precio: 25.00,
        categoria: "hamburguesas",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 2,
        nombre: "Pizza Margarita",
        descripcion: "Pizza con salsa de tomate, mozzarella y albahaca fresca",
        precio: 35.00,
        categoria: "pizzas",
        imagen: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 3,
        nombre: "Hot Dog Especial",
        descripcion: "Hot dog con salchicha premium y toppings variados",
        precio: 18.00,
        categoria: "hotdogs",
        imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 4,
        nombre: "Ensalada César",
        descripcion: "Ensalada fresca con pollo, crutones y aderezo césar",
        precio: 22.00,
        categoria: "ensaladas",
        imagen: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 5,
        nombre: "Papas Fritas",
        descripcion: "Crujientes papas fritas con sal y especias",
        precio: 12.00,
        categoria: "acompanamientos",
        imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 6,
        nombre: "Refresco Personal",
        descripcion: "Refresco de 500ml de tu sabor favorito",
        precio: 8.00,
        categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 7,
        nombre: "Hamburguesa Doble",
        descripcion: "Doble carne, doble queso con bacon crujiente",
        precio: 35.00,
        categoria: "hamburguesas",
        imagen: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 8,
        nombre: "Pizza Hawaiana",
        descripcion: "Pizza con jamón, piña y queso mozzarella",
        precio: 40.00,
        categoria: "pizzas",
        imagen: "https://images.unsplash.com/photo-1627626775846-122c4c484f72?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 9,
        nombre: "Alitas BBQ",
        descripcion: "Alitas de pollo bañadas en salsa barbacoa",
        precio: 28.00,
        categoria: "acompanamientos",
        imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 10,
        nombre: "Sandwich Club",
        descripcion: "Triple sandwich con pollo, tocino y aguacate",
        precio: 24.00,
        categoria: "sandwiches",
        imagen: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 11,
        nombre: "Tacos Mexicanos",
        descripcion: "Tacos de carne con cilantro, cebolla y salsa",
        precio: 20.00,
        categoria: "tacos",
        imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 12,
        nombre: "Agua Mineral",
        descripcion: "Agua mineral natural 500ml",
        precio: 6.00,
        categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 13,
        nombre: "Hamburguesa Vegetariana",
        descripcion: "Hamburguesa de lentejas con vegetales frescos",
        precio: 22.00,
        categoria: "hamburguesas",
        imagen: "https://images.unsplash.com/photo-1525059696034-4967a7290021?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 14,
        nombre: "Pizza Pepperoni",
        descripcion: "Pizza con pepperoni y queso mozzarella",
        precio: 38.00,
        categoria: "pizzas",
        imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 15,
        nombre: "Nachos Supreme",
        descripcion: "Nachos con queso, guacamole y carne molida",
        precio: 26.00,
        categoria: "acompanamientos",
        imagen: "https://images.unsplash.com/photo-1612530469303-8a7c82c17216?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 16,
        nombre: "Jugo Natural",
        descripcion: "Jugo de naranja natural recién exprimido",
        precio: 10.00,
        categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 17,
        nombre: "Hot Dog Clásico",
        descripcion: "Hot dog tradicional con mostaza y ketchup",
        precio: 15.00,
        categoria: "hotdogs",
        imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 18,
        nombre: "Ensalada Griega",
        descripcion: "Ensalada con pepino, tomate, aceitunas y queso feta",
        precio: 20.00,
        categoria: "ensaladas",
        imagen: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 19,
        nombre: "Pizza Cuatro Quesos",
        descripcion: "Pizza con mezcla de cuatro quesos selectos",
        precio: 42.00,
        categoria: "pizzas",
        imagen: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 20,
        nombre: "Hamburguesa BBQ",
        descripcion: "Hamburguesa con salsa barbacoa y aros de cebolla",
        precio: 30.00,
        categoria: "hamburguesas",
        imagen: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 21,
        nombre: "Té Helado",
        descripcion: "Té helado de limón refrescante",
        precio: 9.00,
        categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 22,
        nombre: "Burrito Mexicano",
        descripcion: "Burrito relleno de carne, frijoles y vegetales",
        precio: 28.00,
        categoria: "burritos",
        imagen: "https://images.unsplash.com/photo-1626700051175-6818013e4e43?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 23,
        nombre: "Onion Rings",
        descripcion: "Aros de cebolla crujientes y dorados",
        precio: 14.00,
        categoria: "acompanamientos",
        imagen: "https://images.unsplash.com/photo-1632773533123-804ded99b65a?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 24,
        nombre: "Café Americano",
        descripcion: "Café negro americano caliente",
        precio: 12.00,
        categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 25,
        nombre: "Pizza Vegetariana",
        descripcion: "Pizza con variedad de vegetales frescos",
        precio: 36.00,
        categoria: "pizzas",
        imagen: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 26,
        nombre: "Hot Dog Gigante",
        descripcion: "Hot dog extra grande con todos los toppings",
        precio: 22.00,
        categoria: "hotdogs",
        imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 27,
        nombre: "Ensalada de Frutas",
        descripcion: "Mezcla fresca de frutas de temporada",
        precio: 16.00,
        categoria: "ensaladas",
        imagen: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 28,
        nombre: "Batido de Fresa",
        descripcion: "Batido cremoso de fresa natural",
        precio: 15.00,
        categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 29,
        nombre: "Hamburguesa Picante",
        descripcion: "Hamburguesa con jalapeños y salsa picante",
        precio: 27.00,
        categoria: "hamburguesas",
        imagen: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 30,
        nombre: "Quesadillas",
        descripcion: "Tortillas de queso derretido con guarnición",
        precio: 18.00,
        categoria: "quesadillas",
        imagen: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=400&h=300&fit=crop&auto=format"
    }
];

// Carrito de compras
let carrito = [];
let categoriaActual = 'all';

// Configuración de WhatsApp
const configWhatsApp = {
    numero: '59167881969',
    mensajeBase: '¡Hola! Quiero hacer un pedido:%0A%0A'
};

// Configuración de imágenes
const configImagenes = {
    imagenPorDefecto: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&auto=format'
};

// Inicializar la aplicación
window.onload = function() {
    cargarProductos(categoriaActual);
    actualizarCarrito();
    actualizarBadgeCarrito();
    initParticles();
    initImageLoading();
    initFormValidations();
};

// Inicializar validaciones de formulario - CORREGIDO
function initFormValidations() {
    const nombreInput = document.getElementById('customerName');
    if (nombreInput) {
        // Validar solo letras y espacios en tiempo real
        nombreInput.addEventListener('input', function(e) {
            // Remover números y caracteres especiales, permitiendo solo letras y espacios
            this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        });
        
        // Validar al perder el foco
        nombreInput.addEventListener('blur', function(e) {
            // Eliminar espacios extras y normalizar
            this.value = this.value.trim().replace(/\s+/g, ' ');
            
            // Capitalizar nombre (solo si hay contenido)
            if (this.value) {
                this.value = this.value.split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(' ');
            }
        });

        // Prevenir pegado de texto que contenga números
        nombreInput.addEventListener('paste', function(e) {
            const pastedText = (e.clipboardData || window.clipboardData).getData('text');
            if (/[0-9]/.test(pastedText)) {
                e.preventDefault();
                mostrarNotificacion('No se pueden pegar números en el campo de nombre', 'error');
            }
        });
    }
    
    const telefonoInput = document.getElementById('customerPhone');
    if (telefonoInput) {
        // Validar solo números para teléfono
        telefonoInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '');
            
            // Limitar a 8 dígitos (formato boliviano)
            if (this.value.length > 8) {
                this.value = this.value.slice(0, 8);
            }
        });
    }
}

// Función para validar nombre (solo letras y espacios) - CORREGIDO
function validarNombre(nombre) {
    // Regex que permite letras (incluyendo acentos) y espacios
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
    return regex.test(nombre) && nombre.trim().length >= 2;
}

// Función para validar teléfono
function validarTelefono(telefono) {
    const regex = /^\d{8}$/;
    return regex.test(telefono);
}

// Función para validar curso
function validarCurso(curso) {
    return curso.trim().length >= 2;
}

// Sistema de carga progresiva de imágenes
function initImageLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Obtener ruta de la imagen con parámetros de optimización
function obtenerRutaImagen(url) {
    return url || configImagenes.imagenPorDefecto;
}

// Manejar errores de carga de imágenes
function manejarErrorImagen(imagen) {
    imagen.src = configImagenes.imagenPorDefecto;
    imagen.alt = "Imagen no disponible";
    imagen.classList.add('image-error');
}

// Cambiar entre secciones - CORREGIDO
function showSection(sectionName, event) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById(sectionName).classList.add('active');
    
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    if (sectionName === 'carrito') {
        mostrarCarrito();
    } else if (sectionName === 'pedido') {
        actualizarResumenPedido();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cargar productos en el menú
function cargarProductos(categoria) {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = `
        <div class="loading-container">
            <div class="spinner"></div>
            <p>Cargando deliciosos productos...</p>
        </div>
    `;
    
    let productosFiltrados = productos;
    if (categoria !== 'all') {
        productosFiltrados = productos.filter(p => p.categoria === categoria);
    }
    
    setTimeout(() => {
        if (productosFiltrados.length === 0) {
            menuGrid.innerHTML = `
                <div class="empty-state">
                    <p>No hay productos en esta categoría</p>
                </div>
            `;
            return;
        }
        
        menuGrid.innerHTML = productosFiltrados.map(producto => `
            <div class="menu-item" data-categoria="${producto.categoria}">
                <div class="menu-item-image">
                    <img 
                        src="${configImagenes.imagenPorDefecto}" 
                        data-src="${obtenerRutaImagen(producto.imagen)}" 
                        alt="${producto.nombre}"
                        class="lazy"
                        onerror="manejarErrorImagen(this)"
                    >
                    <div class="image-overlay">
                        <span class="view-icon">👁️ Ver</span>
                    </div>
                    <div class="image-loading">
                        <div class="loading-spinner"></div>
                    </div>
                </div>
                <div class="menu-item-content">
                    <span class="category-badge category-${producto.categoria}">
                        ${producto.categoria.toUpperCase()}
                    </span>
                    <h3 class="menu-item-name">${producto.nombre}</h3>
                    <p class="menu-item-description">${producto.descripcion}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-price">Bs. ${producto.precio.toFixed(2)}</span>
                        <button class="btn-add" onclick="agregarAlCarrito(${producto.id})">
                            ➕ Agregar
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Cargar imágenes después de un breve delay
        setTimeout(() => {
            const lazyImages = document.querySelectorAll('img.lazy');
            lazyImages.forEach(img => {
                const imageUrl = img.dataset.src;
                if (imageUrl) {
                    // Crear una nueva imagen para precargar
                    const tempImage = new Image();
                    tempImage.src = imageUrl;
                    tempImage.onload = function() {
                        img.src = imageUrl;
                        img.classList.remove('lazy');
                        const loadingElement = img.closest('.menu-item-image').querySelector('.image-loading');
                        if (loadingElement) {
                            loadingElement.style.opacity = '0';
                            setTimeout(() => loadingElement.remove(), 300);
                        }
                    };
                    tempImage.onerror = function() {
                        const loadingElement = img.closest('.menu-item-image').querySelector('.image-loading');
                        if (loadingElement) {
                            loadingElement.style.opacity = '0';
                            setTimeout(() => loadingElement.remove(), 300);
                        }
                        manejarErrorImagen(img);
                    };
                }
            });
            
            agregarEventosZoomImagen();
        }, 100);
    }, 500);
}

// Agregar funcionalidad de zoom a las imágenes
function agregarEventosZoomImagen() {
    const imagenes = document.querySelectorAll('.menu-item-image');
    
    imagenes.forEach(imagenContainer => {
        const img = imagenContainer.querySelector('img');
        const overlay = imagenContainer.querySelector('.image-overlay');
        
        imagenContainer.addEventListener('mouseenter', () => {
            if (overlay) overlay.style.opacity = '1';
        });
        
        imagenContainer.addEventListener('mouseleave', () => {
            if (overlay) overlay.style.opacity = '0';
        });
        
        imagenContainer.addEventListener('click', () => {
            if (img.src && img.src !== configImagenes.imagenPorDefecto) {
                mostrarModalImagen(img.src, img.alt);
            }
        });
    });
}

// Mostrar modal con imagen ampliada
function mostrarModalImagen(src, alt) {
    let modal = document.getElementById('imageModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-image-container">
                    <img src="${src}" alt="${alt}">
                    <div class="image-loading-modal">
                        <div class="loading-spinner"></div>
                    </div>
                </div>
                <div class="modal-caption">${alt}</div>
            </div>
        `;
        document.body.appendChild(modal);
        
        const modalImg = modal.querySelector('img');
        modalImg.onload = function() {
            modal.querySelector('.image-loading-modal').style.display = 'none';
        };
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        });
    } else {
        modal.querySelector('img').src = src;
        modal.querySelector('img').alt = alt;
        modal.querySelector('.modal-caption').textContent = alt;
        modal.querySelector('.image-loading-modal').style.display = 'flex';
        
        const modalImg = modal.querySelector('img');
        modalImg.onload = function() {
            modal.querySelector('.image-loading-modal').style.display = 'none';
        };
    }
    
    modal.style.display = 'flex';
}

// Filtrar menú por categoría - CORREGIDO
function filterMenu(categoria, event) {
    categoriaActual = categoria;
    cargarProductos(categoria);
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Agregar producto al carrito - CORREGIDO
function agregarAlCarrito(productId) {
    const producto = productos.find(p => p.id === productId);
    
    if (!producto) {
        mostrarNotificacion('Producto no encontrado', 'error');
        return;
    }
    
    const itemExistente = carrito.find(item => item.id === productId);
    
    if (itemExistente) {
        itemExistente.cantidad++;
        mostrarNotificacion(`Se agregó otra unidad de ${producto.nombre}`, 'success');
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            categoria: producto.categoria,
            imagen: producto.imagen,
            cantidad: 1
        });
        mostrarNotificacion(`${producto.nombre} agregado al carrito`, 'success');
    }
    
    actualizarBadgeCarrito();
    actualizarCarrito();
    
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✅ Agregado';
    btn.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = 'linear-gradient(45deg, #ff6b6b, #feca57)';
        btn.disabled = false;
    }, 1000);
    
    createParticles(event.clientX, event.clientY, 5);
}

// Actualizar badge del carrito
function actualizarBadgeCarrito() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Mostrar carrito
function mostrarCarrito() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalSection = document.getElementById('cartTotalSection');
    
    if (!cartItemsContainer) return;
    
    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Tu carrito está vacío</p>
                <button class="btn-submit" onclick="showSection('menu')" style="margin-top: 20px;">
                    🍽️ Ver Menú
                </button>
            </div>
        `;
        if (cartTotalSection) cartTotalSection.style.display = 'none';
        return;
    }
    
    cartItemsContainer.innerHTML = carrito.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-image">
                    <img 
                        src="${obtenerRutaImagen(item.imagen)}" 
                        alt="${item.nombre}"
                        onerror="manejarErrorImagen(this)"
                    >
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.nombre}</div>
                    <div class="cart-item-price">Bs. ${item.precio.toFixed(2)} c/u</div>
                </div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                <span class="quantity-display">${item.cantidad}</span>
                <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, 1)">+</button>
            </div>
            <div class="cart-item-total">
                <div class="item-total-price">
                    Bs. ${(item.precio * item.cantidad).toFixed(2)}
                </div>
                <button class="remove-btn" onclick="eliminarDelCarrito(${item.id})">
                    🗑️ Eliminar
                </button>
            </div>
        </div>
    `).join('');
    
    const total = calcularTotal();
    const cartTotalElement = document.getElementById('cartTotal');
    if (cartTotalElement) {
        cartTotalElement.textContent = `Bs. ${total.toFixed(2)}`;
    }
    if (cartTotalSection) {
        cartTotalSection.style.display = 'block';
    }
}

// Cambiar cantidad de un producto en el carrito
function cambiarCantidad(productId, cambio) {
    const item = carrito.find(i => i.id === productId);
    
    if (!item) return;
    
    item.cantidad += cambio;
    
    if (item.cantidad <= 0) {
        eliminarDelCarrito(productId);
        return;
    }
    
    actualizarCarrito();
    actualizarBadgeCarrito();
    mostrarCarrito();
}

// Eliminar producto del carrito
function eliminarDelCarrito(productId) {
    const item = carrito.find(i => i.id === productId);
    
    if (!item) return;
    
    if (confirm(`¿Deseas eliminar ${item.nombre} del carrito?`)) {
        carrito = carrito.filter(i => i.id !== productId);
        mostrarNotificacion('Producto eliminado del carrito', 'warning');
        actualizarCarrito();
        actualizarBadgeCarrito();
        mostrarCarrito();
        actualizarResumenPedido();
    }
}

// Vaciar carrito
function clearCart() {
    if (carrito.length === 0) {
        mostrarNotificacion('El carrito ya está vacío', 'warning');
        return;
    }
    
    if (confirm('¿Estás seguro de vaciar todo el carrito?')) {
        carrito = [];
        actualizarCarrito();
        actualizarBadgeCarrito();
        mostrarCarrito();
        mostrarNotificacion('Carrito vaciado', 'success');
    }
}

// Calcular total del carrito
function calcularTotal() {
    return carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
}

// Actualizar carrito (función genérica)
function actualizarCarrito() {
    actualizarResumenPedido();
}

// Actualizar resumen del pedido
function actualizarResumenPedido() {
    const orderSummary = document.getElementById('orderSummary');
    const summaryTotal = document.getElementById('summaryTotal');
    
    if (!orderSummary) return;
    
    if (carrito.length === 0) {
        orderSummary.innerHTML = `
            <div class="empty-cart-mini">
                <p>🛒 Tu carrito está vacío</p>
            </div>
        `;
        if (summaryTotal) summaryTotal.style.display = 'none';
        return;
    }
    
    orderSummary.innerHTML = carrito.map(item => `
        <div class="summary-item">
            <div class="summary-item-image">
                <img 
                    src="${obtenerRutaImagen(item.imagen)}" 
                    alt="${item.nombre}"
                    onerror="manejarErrorImagen(this)"
                >
            </div>
            <div class="summary-item-details">
                <span class="summary-item-name">${item.nombre} x${item.cantidad}</span>
                <span class="summary-item-price">Bs. ${(item.precio * item.cantidad).toFixed(2)}</span>
            </div>
        </div>
    `).join('');
    
    const total = calcularTotal();
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) subtotalElement.textContent = `Bs. ${total.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `Bs. ${total.toFixed(2)}`;
    if (summaryTotal) summaryTotal.style.display = 'block';
}

// Formatear mensaje para WhatsApp - CORREGIDO
function formatearMensajeWhatsApp(pedido) {
    let mensaje = configWhatsApp.mensajeBase;
    
    // Información del cliente
    mensaje += `*👤 Datos del Cliente:*%0A`;
    mensaje += `Nombre: ${pedido.cliente.nombre}%0A`;
    mensaje += `Curso: ${pedido.cliente.curso}%0A`;
    mensaje += `Teléfono: ${pedido.cliente.telefono}%0A`;
    mensaje += `Hora de Entrega: ${pedido.horaEntrega}%0A%0A`;
    
    // Número de pedido
    mensaje += `*📦 Número de Pedido:* #${pedido.numero}%0A%0A`;
    
    // Productos
    mensaje += `*🍽️ Productos Pedidos:*%0A`;
    pedido.items.forEach((item, index) => {
        mensaje += `${index + 1}. ${item.nombre} x${item.cantidad} - Bs. ${(item.precio * item.cantidad).toFixed(2)}%0A`;
    });
    
    // Total
    mensaje += `%0A*💰 Total a Pagar:* Bs. ${pedido.total.toFixed(2)}%0A%0A`;
    
    // Observaciones
    if (pedido.observaciones) {
        mensaje += `*📝 Observaciones:*%0A${pedido.observaciones}%0A%0A`;
    }
    
    // Footer
    mensaje += `_Fecha: ${pedido.fecha}_%0A`;
    mensaje += `_¡Gracias por apoyar a la Promoción 6°B! 🎓_`;
    
    return mensaje;
}

// Enviar pedido a WhatsApp
function enviarPedidoWhatsApp(pedido) {
    const mensaje = formatearMensajeWhatsApp(pedido);
    const urlWhatsApp = `https://wa.me/${configWhatsApp.numero}?text=${mensaje}`;
    
    window.open(urlWhatsApp, '_blank');
}

// Procesar pedido - CORREGIDO
function procesarPedido(event) {
    event.preventDefault();
    
    if (carrito.length === 0) {
        mostrarNotificacion('Debes agregar productos al carrito primero', 'error');
        return;
    }
    
    // Obtener datos del formulario
    const nombre = document.getElementById('customerName').value.trim();
    const curso = document.getElementById('customerGrade').value.trim();
    const telefono = document.getElementById('customerPhone').value.trim();
    const horaEntrega = document.getElementById('deliveryTime').value;
    const observaciones = document.getElementById('orderNotes').value.trim();
    
    // Validar campos requeridos
    if (!nombre || !curso || !telefono || !horaEntrega) {
        mostrarNotificacion('Por favor completa todos los campos requeridos', 'error');
        return;
    }
    
    // Validaciones específicas - NOMBRE CORREGIDO
    if (!validarNombre(nombre)) {
        mostrarNotificacion('Por favor ingresa un nombre válido (solo letras y espacios, mínimo 2 caracteres)', 'error');
        document.getElementById('customerName').focus();
        return;
    }
    
    if (!validarTelefono(telefono)) {
        mostrarNotificacion('Por favor ingresa un teléfono válido (8 dígitos)', 'error');
        document.getElementById('customerPhone').focus();
        return;
    }
    
    if (!validarCurso(curso)) {
        mostrarNotificacion('Por favor ingresa un curso válido', 'error');
        document.getElementById('customerGrade').focus();
        return;
    }
    
    // Crear objeto de pedido
    const pedido = {
        cliente: {
            nombre,
            curso,
            telefono
        },
        items: carrito,
        total: calcularTotal(),
        horaEntrega,
        observaciones,
        fecha: new Date().toLocaleString('es-BO'),
        numero: Math.floor(Math.random() * 10000)
    };
    
    // Mostrar confirmación antes de enviar a WhatsApp
    const confirmacion = `
        ¡PEDIDO CONFIRMADO! 🎉
        
        Número de Pedido: #${pedido.numero}
        Cliente: ${nombre}
        Curso: ${curso}
        Hora de Entrega: ${horaEntrega}
        Total: Bs. ${pedido.total.toFixed(2)}
        
        ¿Deseas enviar este pedido por WhatsApp?
    `;
    
    if (confirm(confirmacion)) {
        // Enviar a WhatsApp
        enviarPedidoWhatsApp(pedido);
        
        // Efecto de confeti
        launchConfetti();
        
        // Limpiar formulario y carrito
        document.getElementById('orderForm').reset();
        carrito = [];
        actualizarCarrito();
        actualizarBadgeCarrito();
        
        mostrarNotificacion('¡Pedido enviado a WhatsApp! Te contactaremos pronto', 'success');
        
        // Regresar al menú
        setTimeout(() => {
            showSection('menu');
        }, 2000);
    }
}

// Enviar mensaje de contacto
function enviarMensaje(event) {
    event.preventDefault();
    
    mostrarNotificacion('¡Mensaje enviado! Te responderemos pronto', 'success');
    document.getElementById('contactForm').reset();
}

// Mostrar notificación
function mostrarNotificacion(mensaje, tipo = 'success') {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.textContent = mensaje;
    notification.className = `notification ${tipo} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Función para simular actualización de progreso
function actualizarProgreso() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (!progressFill || !progressText) return;
    
    const porcentaje = 45;
    progressFill.style.width = porcentaje + '%';
    progressText.textContent = `Meta: ${porcentaje}%`;
}

// Sistema de partículas para el fondo
function initParticles() {
    const canvas = document.getElementById('particlesBackground');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: `rgba(255, 255, 255, ${Math.random() * 0.3})`
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x <= 0 || particle.x >= canvas.width) particle.speedX *= -1;
            if (particle.y <= 0 || particle.y >= canvas.height) particle.speedY *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// Crear partículas de efecto al agregar productos
function createParticles(x, y, count) {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
}

// Efecto de confeti para celebraciones
function launchConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = confetti.style.width;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        container.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Actualizar progreso al cargar
actualizarProgreso();