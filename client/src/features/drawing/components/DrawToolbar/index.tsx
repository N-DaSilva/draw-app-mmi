import { useColorStore } from "../../../../shared/store/useColorStore"
import { useSizeStore } from "../../../../shared/store/useSizeStore";
import { useCallback } from "react"
import styles from './DrawToolbar.module.css';

export function DrawToolbar() {
  const setColor = useColorStore((state) => state.setColor)
  const setSize = useSizeStore((state) => state.setSize)
  const currentSize = useSizeStore((state) => state.size)

  const handleMouseClick = useCallback((e : React.MouseEvent<HTMLInputElement>) => {
    if(e.currentTarget){
      setColor(e.currentTarget.value)
    }
  }, [])

  const handleChange = useCallback((e : React.ChangeEvent<HTMLInputElement>)=>{
    if(e.currentTarget){
      setSize(parseInt(e.currentTarget.value))
    }
  }, [])

  return (
    <div className={styles.toolbar}>
      <input type="radio" name="color" value='black' defaultChecked onClick={handleMouseClick} className="radio radio-lg " />
      <input type="radio" name="color" value='red' onClick={handleMouseClick} className="radio radio-lg bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" />
      <input type="radio" name="color" value='orange' onClick={handleMouseClick} className="radio radio-lg bg-orange-100 border-orange-300 checked:bg-orange-200 checked:text-orange-600 checked:border-orange-600" />
      <input type="radio" name="color" value='yellow' onClick={handleMouseClick} className="radio radio-lg bg-yellow-100 border-yellow-300 checked:bg-yellow-200 checked:text-yellow-600 checked:border-yellow-600" />
      <input type="radio" name="color" value='green' onClick={handleMouseClick} className="radio radio-lg bg-green-100 border-green-300 checked:bg-green-200 checked:text-green-600 checked:border-green-600" />
      <input type="radio" name="color" value='cyan' onClick={handleMouseClick} className="radio radio-lg bg-cyan-100 border-cyan-300 checked:bg-cyan-200 checked:text-cyan-600 checked:border-cyan-600" />
      <input type="radio" name="color" value='blue' onClick={handleMouseClick} className="radio radio-lg bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600" />
      <input type="radio" name="color" value='purple' onClick={handleMouseClick} className="radio radio-lg bg-purple-100 border-purple-300 checked:bg-purple-200 checked:text-purple-600 checked:border-purple-600" />
      <input type="radio" name="color" value='#df007eff' onClick={handleMouseClick} className="radio radio-lg bg-pink-100 border-pink-300 checked:bg-pink-200 checked:text-pink-600 checked:border-pink-600" />

      <input type="range" min="1" max="10" onChange={handleChange} className="range" /> <p>{currentSize}</p>
    </div>
  )
}