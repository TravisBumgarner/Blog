# Run from /blog dir

echo "Making new post" $1

filename=$(echo "$1" | tr '[:upper:]' '[:lower:]')
filename=$( echo "$filename" | tr ' ' '-')

mkdir "./static/image/$filename"
/usr/local/bin/hugo new "post/$filename.md"