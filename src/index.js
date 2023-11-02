import * as $ from 'jquery'
import Post from '@/models/Post';
import csv from '@/assets/data.csv'
import xml from '@/assets/data.xml'
import json from '@/assets/json.json'
import WebpackLogo from '@/assets/webpack-logo.png'
import './styles/styles.css'


const post = new Post('Webpack post', WebpackLogo)
$('pre').addClass('code').html(post.toString())
console.log('Post to string:', post.toString())
console.log('JSON: ', json)
console.log('XML: ', xml)
console.log('CSV: ', csv)