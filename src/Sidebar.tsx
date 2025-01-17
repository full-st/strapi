import { useGlobalContext } from "./context"
import {FaTimes} from 'react-icons/fa'
import sublinks from './data'
const Sidebar = () => {
  const {sidebar,sidebarClose} = useGlobalContext()
  return (
    <aside className={sidebar?'sidebar show-sidebar':'sidebar'}>
      <div className="sidebar-container">
        <button className='close-btn' onClick={sidebarClose}>
          <FaTimes/>
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink)=>{
            const {links,page,pageId} = sublink
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link)=>{
                    const {id,label,icon,url} = link
                    return (
                      <a href={url} key={id}>
                        {icon} {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
export default Sidebar