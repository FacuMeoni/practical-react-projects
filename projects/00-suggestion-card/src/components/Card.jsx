import '../App.css'
import { users } from '../utils/users'
import { FollowCard } from './followCard'

export function Card () {
  return (
    <section className='x-FollowCard-Container'>
      <div className='title-container'>
        <h2 className='title'> Who to follow </h2>
      </div>
      {users.map(({ userName, userImg, followYou, userTag, isVerify }) => {
        return (
          <div className='card-div' key={userName}>
            <FollowCard
              followYou={followYou}
              userName={userName}
              userTag={userTag}
              userImg={userImg}
              isVerify={isVerify}
            />
          </div>
        )
      })}
      <a href='#' className='button-container'>
        Show more
      </a>
    </section>
  )
}
