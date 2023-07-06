import ReactTags from "react-tag-autocomplete";
import '../../styles/tags.css'
import { useState, useCallback, useRef } from "react";
import { Tag } from "@/app/types";

type Props = {
  tags:Tag[],
  suggestions:Tag[]
}

const Tags = (props:Props) => {

    const [tags, setTags] = useState<Tag[]>(props.tags);
    console.log(tags.map(item => item.name))
console.log(tags)
    const [suggestions, setSuggestions] = useState<Tag[]>(props.suggestions);

    const reactTags = useRef();
    const onDelete = useCallback(
      (tagIndex:number) => {
        setTags(tags.filter((_, i) => i !== tagIndex));
      },
      [tags]
    );
    const onAddition = useCallback(
      (newTag:Tag) => {
        setTags([...tags, newTag]);
      },
      [tags]
    );
  return (
    <>
    {/* @ts-ignore */}
    <ReactTags
    classNames={{
      root: "react-tags",
      rootFocused: "is-focused",
      selected: "react-tags__selected",
      selectedTag: "react-tags__selected-tag",
      selectedTagName: "react-tags__selected-tag-name",
      search: "react-tags__search",
      searchWrapper: "react-tags__search-wrapper",
      searchInput: "react-tags__search-input",
      suggestions: "react-tags__suggestions",
      suggestionActive: "is-active",
      suggestionDisabled: "is-disabled",
      suggestionPrefix: "react-tags__suggestion-prefix",
    }}
    ref={reactTags}
    tags={tags}
    allowNew
    minQueryLength={1}
    tagComponent={function TagComponent ({ tag, removeButtonText, onDelete }) {
      return (
        <button type='button' className="bg-button px-3 py-1 mr-2 rounded-md" title={`${removeButtonText}: ${tag.name}`} onClick={onDelete}>
          {tag.name} X
        </button>
      )
    }}
    noSuggestionsText="Create New"
    suggestions={suggestions}
    onDelete={onDelete}
    onAddition={onAddition}
  />
  </>
  )
}

export default Tags