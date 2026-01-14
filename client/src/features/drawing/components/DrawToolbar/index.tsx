import { useColorStore } from "../../../../shared/store/useColorStore"
import { useCallback } from "react"

export function DrawToolbar() {
  const setColor = useColorStore((state) => state.setColor)

  const handleMouseClick = useCallback((e : React.MouseEvent<HTMLButtonElement>) => {
    if(e.currentTarget){
      console.log(e.currentTarget.value)
      setColor(e.currentTarget.value)
    }
  }, [])

  return (
    <div>
      <button value={'black'} onClick={handleMouseClick}>Noir</button>
      <button value={'red'} onClick={handleMouseClick}>Rouge</button>
    </div>
  )
}