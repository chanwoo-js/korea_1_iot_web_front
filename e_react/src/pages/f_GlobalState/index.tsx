import React from 'react'
import Context from './Context'
import Zustand01 from './Zustand01'
import Zustand02 from './Zustand02'
import { useMemberStore } from '../../store/user.store'


export default function Index() {
  const {members} = useMemberStore();
  return (
    <div>
      <h1>리액트 전역 상태관리 (context api / zustand</h1>
      <Context></Context>
      <Zustand01></Zustand01>
      <Zustand02></Zustand02>
      <p>{members.map(member => (
        <p>{member.id} / {member.name}</p>
      ))}</p>
    </div>
  )
}