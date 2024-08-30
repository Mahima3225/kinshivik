import React from 'react';
import HomeHeader from '../home/HomeHeader';
import Sidebar from '../home/Sidebar';
import CategoryHeader from './CategoryHeader';
import CategoryMainView from './CategoryMainView';
import '../../styles/category.css';

export default function CategoryPrincipal() {
  return (
    <>
        <HomeHeader/>
        <Sidebar/>
        <CategoryHeader/>
        <CategoryMainView/>
    </>
  )
}
