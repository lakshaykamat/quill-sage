import Link from "next/link";
import { AiFillFolder } from "react-icons/ai";
import { useContextMenu, Menu, Item, ItemParams } from "react-contexify";
import "react-contexify/ReactContexify.css";
import { deleteFolder, renameFolder } from "@/app/lib";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/react-query";
import { Folder } from "@/app/types";

const MENU_ID = "blahblah";
type ItemProps = {
  key: string;
};

// Defined just for documentation purpose
type ItemData = any;
const FolderCard = ({
  name,
  id,
}: {
  name: string;
  id: string;
}) => {

  const { show } = useContextMenu({
    id: MENU_ID,
    props: {
      key: id,
    },
  });

  function displayMenu(e: React.MouseEvent) {
    // pass the item id so the `onClick` on the `Item` has access to it
    show({ event: e, props: { key: id } });
  }

  const handleItemClick = async ({
    id,
    props,
  }: ItemParams<ItemProps, ItemData>) => {
    switch (id) {
      case "del":
        // @ts-ignore
        deleteFolder(props?.key); 
        break;
      case "rename":
        const name = prompt("Rename Folder:");
        if (!name) return alert("Enter valid name");
        // @ts-ignore
        renameFolder(props?.key, name);
        break;
    }
  };
  return (
    <>
      <div id={id} key={id} onContextMenu={displayMenu}>
        <Link
          href={`collections/${name}`}
          className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-100"
        >
          <AiFillFolder className="w-12 h-12 text-slate-600 md:w-24 md:h-24" />
          <span className="font-medium">{name}</span>
        </Link>
      </div>
      <Menu id={MENU_ID}>
        <Item id="del" data={id} onClick={handleItemClick}>
          Delete
        </Item>
        <Item id="rename" data={id} onClick={handleItemClick}>
          Rename
        </Item>
      </Menu>
    </>
  );
};
export default FolderCard;
