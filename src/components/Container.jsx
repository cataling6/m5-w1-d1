import classes from './Container.module.css'

export const Container = () =>{
    const array = ['ciao','pippo','pluto']
    return <div className={classes.styleContainer}> 
    {
        array.map ((item, i) => <p key={item}>{item}</p>)
    }
    </div>
}