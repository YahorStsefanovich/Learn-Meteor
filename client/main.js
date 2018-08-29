import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

let postsData = [
    {
        title: 'Introducing Telescope',
        author: 'Garis',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        author: 'Garis',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        author: 'Garis',
        url: 'http://themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});

Template.postItem.helpers({
    domain: function () {
        let a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});