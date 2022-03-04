import { category } from '@/data/category'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import Filter from './Filter'
import { FiltersContainer, FilterHeader, FilterList, FilterItem } from './filter.style'
import { getTrackBackground, Range } from 'react-range';
import { Context } from '@/context/appContext'
import Button from '@/components/Elements/Button/Button'
import { useRouter } from 'next/router'

type FilterProps = {
  filterDrawerOpen: boolean
  closeFilterDrawer: () => void
}

const colorArray = [
  'black',
  'blue',
  'orange',
  'green',
  'red'
]

type categories = 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens' | 'all'

const Filters = ({
  filterDrawerOpen,
  closeFilterDrawer
}: FilterProps) => {

  const STEP = 40
  const MIN = 10
  const MAX = 500
  const [values, setValues] = useState([10, 500])
  const router = useRouter();
  
  const [selectedCategoryType, setSelectedCategoryIndex] = useState<categories>(router.query.state ? router.query.state as categories: 'all')
  const [selectedColor, setSelectedColor] = useState(undefined)
  const { setFilter, clothes } = useContext(Context)
  console.log(router.query?.state)
  const countColors = (label: string) => {
    const count = clothes.filter(clothing => clothing.name.toLowerCase().includes(label)).length
    return count
  }

  useEffect(() => {
    const filter = {
      price: values,
      category: selectedCategoryType,
      color: selectedColor ? selectedColor : undefined
    }
    setFilter(filter)
  }, [selectedCategoryType, values, selectedColor])


  
  return (
    <FiltersContainer  className={filterDrawerOpen ? 'open' : ''}>
        <FilterHeader>
          <AiFillCloseCircle
            onClick={closeFilterDrawer} 
            fill="red" 
            size="3rem" />
        </FilterHeader>
        <Filter title="Categories">
          <FilterList>
              <FilterItem 
                onClick={() => setSelectedCategoryIndex('all')}
                className={`${selectedCategoryType === 'all' ? 'selected' : ''}`}
                >
                <span className="label">All</span>
              </FilterItem>
              {
              category.map((label, index) => (
                <FilterItem 
                  key={index} 
                  className={`${selectedCategoryType === label.title ? 'selected' : ''}`}
                  onClick={() => setSelectedCategoryIndex(label.title as categories)}>
                  <span className="label">{label.title}</span>
                </FilterItem>
              ))
            }
      
          </FilterList>
          
        </Filter>
        <Filter title="Price Range">
          <span className="prices">${values[0]} - ${values[1]}</span>
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={values => {
            console.log(values);
            setValues(values);
          }}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%"
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values,
                      colors: ["#ccc", "#548BF4", "#ccc"],
                      min: MIN,
                      max: MAX
                    }),
                    alignSelf: "center"
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA"
                }}
              >
                <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: isDragged ? "#548BF4" : "#CCC"
                  }}
                />
              </div>
            )}
          />
        </Filter>
        <Filter title="Colors">
          <FilterList>
            {
              colorArray.map((label, index) => (
                <FilterItem key={index}
                  className={`${selectedColor === label ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(label)}
                >
                  <div className="label label-color" >
                    <span style={{
                      backgroundColor: label
                    }}/>
                    <span>{label}</span>
                  </div>
                  <span className="value">{countColors(label)}</span>
                </FilterItem>
              ))
            }
            <div className="u-margin-top-medium">
              <Button 
              variant="dark" 
              onClickHandler={() => setSelectedColor(undefined)}
              size="lg" >
                Reset
            </Button>
            </div>
          
          </FilterList>
          
        </Filter>
        
        
    </FiltersContainer>
  )
}

export default Filters