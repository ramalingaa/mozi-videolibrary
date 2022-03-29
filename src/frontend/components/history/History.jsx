import React from 'react'
import { useVideoContext, useAuthContext } from '../../context/index-context'
import { HistoryCard, SideMenuGuide} from '../index-components'
import axios from 'axios'
import { Link } from "react-router-dom"

const History = () => {
    const { state, dispatch } = useVideoContext()
    const { historyData} = state
    
    const { jwtToken } = useAuthContext()
    const clearHistory = () => {
        (async () => {
            try {
                const response = await axios.delete("/api/user/history/all", {headers:{authorization:jwtToken}})
                dispatch({type:"SET_HISTORY_DATA", payload:response.data.history})
            }
            catch(e) {
                console.log(e)
            }
        })()
    }
  return (
    <div className="single-card-wrapper history-card-wrapper">
        <SideMenuGuide />
        <div className = "history-cards-wrapper">
            { historyData.length >= 1 && 
                <div>
                    <div className = "clear-history-wrapper">
                        <button onClick = {clearHistory} className = "btn primary">Clear History</button>
                    </div>
                    <div className = "single-play-card history-video-card">
                        { historyData.map((ele) => {
                        return <HistoryCard vInfo = {ele} key = {ele._id}/>
                    })}
                    </div>
                </div>
            }
            {historyData.length < 1 && 
          <div className = "empty-single-playlist">
            <p className = "text-large  fw-7">History is currently empty</p>
            <small>Find the more videos you love from latest releases</small>
            <Link to = "/videos" className = "btn primary">Keep Watching</Link>
          </div>
          }

            
        </div>
    </div>
  )
}

export default History