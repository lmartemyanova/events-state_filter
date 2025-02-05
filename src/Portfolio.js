import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

// Разработайте компонент класса Portfolio, хранящий список фильтров, активный фильтр, а также список проектов.

// Сами фильтры отображаются в компоненте без состояния Toolbar, которому от Portfolio мы передаём три свойства: 
// filters, selected, onSelectFilter(filter)

// Изображения самих проектов отображаются компонентом без состояния ProjectList, которому от Portfolio 
// мы передаём список проектов — в свойство projects.

// Чтобы компонент Portfolio мог реагировать на выбор пользователем фильтра проектов, например, Business Cards, 
// и передавать отфильтрованные по категории Business Cards проекты в компонент ProjectList, 
// в класс Portfolio необходимо добавить состояние (state).


// установить состояние выбранного фильтра в обработчике события, который Portfolio передаёт в свойство onSelectFilter компонента Toolbar

// из компонента Portfolio передать активный фильтр в свойство selected компонента Toolbar

// в компоненте Portfolio отфильтровать по активному фильтру проекты и передать их в компонент ProjectList


class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selected: 'All',
            projects: [{
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                category: "Business Cards"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                category: "Business Cards"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                category: "Flayers"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                category: "Business Cards"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
                category: "Flayers"
            }]
        };

        // this.selected = 'All';
        // this.filters = filters;
        // this.projects = projects;
        this.onSelectFilter = this.onSelectFilter.bind(this);
        // this.filterProjects = this.filterProjects.bind(this);
    }

    onSelectFilter(filter) {
        return this.state.selected !== filter 
            ? this.setState({ selected: filter }) : this.state
    }

    // filterProjects(filter) {
    //     return this.projects.map((project) => {
    //         project.category == filter
    //     })
    // }

    render() {
        const { selected, projects } = this.state;
        // const filters = filters;
        const filters = ['All', 'Websites', 'Flayers', 'Business Cards']

        // console.log(filters)
        const filterProjects = selected === 'All'
            ? projects
            : projects.filter(project => project.category === selected)

        return (
            <div className="portfolio">
            <div className="toolbar">
                <Toolbar 
                    selected={selected} 
                    filters={filters} 
                    onSelectFilter={(filter) => {this.onSelectFilter(filter)}}
                />
            </div>
            <p></p>
            <div className="project-list">
                {/* {console.log(projects[1])} */}
                <ProjectList projects={filterProjects} />
            </div>
            </div>
        )
    }
}

export default Portfolio