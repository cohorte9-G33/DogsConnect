import React from 'react'
import ButtonSearch from '../Search/ButtonSearch'
import './navBarSearch.css'

const NavBarSearch = () => {

  return (
    <>
        <div>
            <form className="formulario contenedor">
                <div className="formulario__campo">
                    <label htmlFor="ubicacion" className="formulario__label">Ciudad:</label>
                    <input type="text" className='formulario__input' id="ubicacion" placeholder="Ciudad" />
                </div>

                <div className="formulario__campo">
                    <label htmlFor="raza" className="formulario__label">Raza:</label>
                    <input type="text" className="formulario__input" id="raza" placeholder="Raza" />
                </div>

                <div className="formulario__campo">
                    <label htmlFor="sexo" className="formulario__label">Sexo:</label>
                    <select name="select" id='sexo' className="formulario__input">
                        <option value="value0" disabled>Sexo</option>
                        <option value="value1">Macho</option>
                        <option value="value2">Hembra</option>
                    </select>
                </div>

                <div className="formulario__campo">
                    <label htmlFor="Tamaño" className="formulario__label">Tamaño:</label>
                    <select name="select" id='tamaño' className="formulario__input">
                        <option value="value0" disabled>Tamaño</option>
                        <option value="value1">Pequeño</option>
                        <option value="value2">Mediano</option>
                        <option value="value3">Grande</option>
                    </select>
                </div>

                <div className="formulario__campo">
                    <label htmlFor="Color" className="formulario__label">Color:</label>
                    <input type="text" className="formulario__input" id="color" placeholder="Color" />
                </div>

                <div className="formulario__campo">
                    <label htmlFor="pelo" className="formulario__label">Pelo:</label>
                    <select name="select" id='pelo' className="formulario__input">
                        <option value="value0" disabled>Pelo</option>
                        <option value="value1">Corto</option>
                        <option value="value2">Medio largo</option>
                        <option value="value3">Largo</option>
                    </select>
                </div>

                <div className="formulario__campo ">
                    <button className="formulario__submit">
                    Buscar
                    </button>
                </div>
            </form>
        </div>
        <div className='nav_toggle'>
            <span>
                <ButtonSearch />
            </span>
        </div>
    </>
)
}

export default NavBarSearch
