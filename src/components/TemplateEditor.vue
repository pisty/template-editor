<template>
  <div class="container template-editor">
    <nav class="navbar justify-content-center">
        <h1 class="my-5">{{ title }}</h1>
    </nav>
    <main>
      <div class="row">
        <div class="col-3">
          <div class="list-group">
            <a href="#" v-for="f in files" :key="f.name" class="list-group-item" :class="{active: f.name === active}" @click="changeFile(f.name)">
              <i class="far fa-file-alt fa-fw"></i> {{ f.file }}
            </a>
          </div>
        </div>
        <div class="col-9">
          <codemirror v-model="code"
                      :options="cmOption"
                      @cursorActivity="onCmCursorActivity"
                      @ready="onCmReady"
                      @focus="onCmFocus"
                      @blur="onCmBlur">
          </codemirror>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/twig/twig.js'
// theme css
import 'codemirror/theme/material.css'

// require active-line.js
import 'codemirror/addon/selection/active-line.js'

// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js'
import 'codemirror/addon/search/searchcursor.js'

// hint
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/javascript-hint.js'

// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'
import 'codemirror/addon/search/match-highlighter.js'
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'

// keyMap
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/search/search.js'
import 'codemirror/keymap/sublime.js'

// foldGutter
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/xml-fold.js'

import logo from '../files/logo.js'
import news from '../files/news.js'
import search from '../files/search.js'

export default {
  name: 'TemplateEditor',
  data () {
    return {
      logo: logo,
      news: news,
      search: search,
      files: [
        {
          file: 'logo.tpl',
          name: 'logo'
        },
        {
          file: 'news.tpl',
          name: 'news'
        },
        {
          file: 'search.tpl',
          name: 'search'
        }
      ],
      code: logo,
      active: 'logo',
      title: 'Template Editor',
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        lineWrapping: true,
        line: true,
        foldGutter: true,
        styleSelectedText: true,
        scrollbarStyle: 'simple',
        keyMap: 'sublime',
        matchBrackets: true,
        multiplexingMode: true,
        showCursorWhenSelecting: true,
        theme: 'material',
        extraKeys: { 'Ctrl': 'autocomplete' },
        hintOptions: {
          completeSingle: false
        }
      }
    }
  },
  methods: {
    changeFile (file) {
      switch (file) {
        case 'news':
          this.code = this.news
          break
        case 'logo':
          this.code = this.logo
          break
        case 'search':
          this.code = this.search
          break
      }
      this.active = file
    },
    onCmCursorActivity (codemirror) {
      console.log('onCmCursorActivity', codemirror)
    },
    onCmReady (codemirror) {
      codemirror.setSize('100%', '500px')
      console.log('onCmReady', codemirror)
    },
    onCmFocus (codemirror) {
      console.log('onCmFocus', codemirror)
    },
    onCmBlur (codemirror) {
      console.log('onCmBlur', codemirror)
    }
  },
  components: {
    codemirror
  }
}
</script>
