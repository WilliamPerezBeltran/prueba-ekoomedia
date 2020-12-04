import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import "./Products.scss";

const Products = () => {
  const { register, errors, handleSubmit } = useForm();

  const [entradas, setentradas] = useState([]);

  const procesarFormulario = (data, e) => {
    console.log(data);
    setentradas([...entradas, data]);
    e.target.reset();
  };

  return (
    <Fragment>
      <div className="wrapper">
        <div className="title">Formulario</div>

        <form className="form" onSubmit={handleSubmit(procesarFormulario)}>
          <div className="inputfield">
            <label>Nombre completo</label>
            <input
              name="name"
              type="text"
              className="input"
              ref={register({
                required: { value: true, message: "Ingrese un nombre" },
              })}

              placeholder="Ingrese título"
            ></input>
            <span className="text-danger">
              {errors?.name?.message}
            </span>
          </div>
          <div className="inputfield">
            <label>Email</label>
            <input
              name="email"
              type="text"
              className="input"
              ref={register({
                required: { value: true, message: "Ingrese un email" },
              })}
              ref={register({
                required: { value: true, message: "Ingrese un email" },
              })}
              placeholder="Ingrese email"
            ></input>
            <span className="text-danger ">
              {errors?.email?.message}
            </span>
          </div>
          <div className="inputfield">
            <label>Celular</label>
            <input
              name="celular"
              type="text"
              className="input"
              ref={register({
                required: { value: true, message: "Ingrese un celular" },
              })}
              placeholder="Ingrese un celular"
            ></input>
            <span className="text-danger">
              {errors?.celular?.message}
            </span>
          </div>
          <div className="inputfield">
            <label>Edad</label>
            <input
              name="age"
              type="text"
              className="input"
              ref={register({
                required: { value: true, message: "Ingrese una edad"},
              })}
              placeholder="Ingrese una edad"
            ></input>
            <span className="text-danger">
               <span> {errors.age && errors.age.message}</span>
            </span>
          </div>

          <div className="inputfield">
            <input type="submit" value="Registrarse" className="btn"></input>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Products;
