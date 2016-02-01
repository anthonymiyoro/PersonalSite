import os

from flask import Flask, render_template
from werkzeug import cached_property
import markdown

POSTS_FILE_EXTENTION = '.md'
app = Flask(__name__)


# turns markdown into html
class Post(object):
    def __init__(self, path):
        self.path = path

    @cached_property
    def html(self):
        with open(self.path, 'r') as fin:
            content = fin.read().strip()
        return markdown.markdown(content)


@app.route('/')
def index():
    return 'Hello World!'


@app.route('/blog/<path:path>')
def post(path=None):
    path = os.path.join('posts', path + POSTS_FILE_EXTENTION)
    post = Post(path)
    # renders to the post content_variable in the post.html
    return render_template('post.html', post=post)


if __name__ == '__main__':
    app.run(port=8000, debug=True)
