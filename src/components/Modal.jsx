import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-transparent text-white  mr-1 "
        type="button"
        onClick={() => setShowModal(true)}
      >
         <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in " src="/edit-icon.svg" alt="Edit Icon" />
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-5/12 my-6 mx-auto max-w-3xl border-4 border-solid-gray-600 rounded-lg">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none  ">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Editar Tarea</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white opacity-7 h-7 w-7 text-xl block bg-gray-500 py-0 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-5 flex-auto text-center">
                  <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8">
                   
                    <input className="focus:shadow-lg focus:shadow-blue-600   p-3 w-9/12 py-4  bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out text-start" />
                  </form>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-red-500 active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="text-white bg-teal-500 active:bg-teal-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;