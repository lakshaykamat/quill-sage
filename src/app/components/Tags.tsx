import ReactTags from 'react-tag-autocomplete'
import {Dispatch,SetStateAction,useRef,useCallback} from 'react'
import { Tag } from '../types'
type Props = {
    tags:Tag[],
    suggestions:Tag[]
    setTags:Dispatch<SetStateAction<Tag[]>>
    setSuggestions:Dispatch<SetStateAction<Tag[]>>
}
import '../styles/tags.css'

const Tags = ({tags,setTags,suggestions,setSuggestions}: Props) => {
    const reactTags = useRef()

    const onDelete = useCallback((tagIndex:number) => {
      setTags(tags.filter((_, i) => i !== tagIndex))
    }, [tags])
  
    const onAddition = useCallback((newTag:Tag) => {
      setTags([...tags, newTag])
    }, [tags])
  
    return (
        //@ts-ignore
      <ReactTags
        ref={reactTags}
        tags={tags}
        classNames={{
            root: 'react-tags',
            rootFocused: 'is-focused',
            selected: 'react-tags__selected',
            selectedTag: 'react-tags__selected-tag',
            selectedTagName: 'react-tags__selected-tag-name',
            search: 'react-tags__search',
            searchWrapper: 'react-tags__search-wrapper',
            searchInput: 'react-tags__search-input',
            suggestions: 'react-tags__suggestions',
            suggestionActive: 'is-active',
            suggestionDisabled: 'is-disabled',
            suggestionPrefix: 'react-tags__suggestion-prefix'
          }}
        suggestions={suggestions}
        tagComponent={function TagComponent ({ tag, removeButtonText, onDelete }) {
            return (
              <button type='button' className='px-3 py-2 mr-2 rounded-2xl bg-light' title={`${removeButtonText}: ${tag.name}`} onClick={onDelete}>
                {tag.name}
              </button>
            )
          }}
          allowNew
        minQueryLength={1}
        onDelete={onDelete}
        onAddition={onAddition}
      />
    )
}

export default Tags