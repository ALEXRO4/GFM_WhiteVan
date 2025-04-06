import React from 'react'
import './contact.css';
const Contact = () => {
  return (
    <div>
      <section>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-lg bg-gray-100 shadow-lg" style={{ paddingBottom: "70px", paddingTop: "25px" }}>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h3 className="text-center font-semibold leading-7 text-amber-600">GFM</h3>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Quieres contactarnos?</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">Llena el siguiente formulario o revisa alguno de nuestros otros métodos de contacto</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {/* Formulario */}
                <section>
                  <div className="relative sm:flex sm:justify-center col-start-1">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      {/* Form */}
                      <section>
                        <form className="max-w-md mx-auto" action="https://formspree.io/f/xvgpogkl" method="post">
                          <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                              <input type="text" name="Nombre(s):" id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="" required />
                              <label htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 w-full">*
                                Nombre(s)</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                              <input type="text" name="Apellidos:" id="floating_last_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                              <label htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">*
                                Apellidos</label>
                            </div>
                          </div>
                          <div className="relative z-0 w-full mb-5 group">
                            <input type="number" maxLength="10" minLength="10" name="Celular:" id="floating_phone"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" " required />
                            <label htmlFor="floating_phone"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">*
                              Celular</label>
                          </div>


                          <div className="relative z-0 w-full mb-5 group">
  <input 
    type="email" 
    name="Email" 
    id="floating_email"
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" " 
    required 
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"  // Expresión regular para validar el formato
    title="Por favor, ingresa una dirección de correo válida."  // Mensaje de error personalizado
  />
  <label htmlFor="floating_email"
    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    * Email
  </label>
</div>

                          
                          <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="Comentario:" id="floating_company"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" " />
                            <label htmlFor="floating_company"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                              Comentario (Opcional)</label>
                          </div>
                          <button type="submit"
                            className="text-white bg-amber-600 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-orange-500 dark:focus:ring-yellow-700">Enviar</button>
                        </form>
                      </section>
                    </dt>
                  </div>
                </section>

                {/* Panel izquierdo */}
                <dt>
                  <div className="relative pl-16 mx-auto pt-5">
                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-start-1 col-end-5">
                        <div className="absolute flex h-10 w-10 items-center justify-center rounded-lg">
                          <img src="/Images/Icons/smartphone.png" alt="Telefono-icon" />
                        </div>
                        <p className="contactos">+52 1 55 8062 5857</p>
                      </div>
                      <div className="separacion col-start-1 col-end-5">
                        <div className="absolute flex h-10 w-10 items-center justify-center rounded-lg">
                          <img src="/Images/Icons/smartphone.png" alt="cellphone-icon" />
                        </div>
                        <p className="contactos">+52 1 55 4133 4597</p>
                      </div>
                      <div className="col-start-1 col-end-5">
                        <div className="absolute h-10 w-10 items-center justify-center rounded-lg">
                          <img src="/Images/Icons/mail.png" alt="mail-icon" />
                        </div>
                        <p className="contactos">gfmwhitevan@hotmail.com</p>
                      </div>
                      
                      
                    </div>
                  </div>
                </dt>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;
