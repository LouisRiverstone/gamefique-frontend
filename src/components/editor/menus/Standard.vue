<template>
    <!-- <div class="editor">
        <div class="row no-color">
            <div class="d-flex justify-content-left">
                <div class="d-flex">
                    <Dropdown title="Fonts">
                        <template v-slot:text>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-fonts"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"
                                />
                            </svg>
                        </template>
                        <template v-slot:list>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="#"
                                        @click="
                                            editor
                                                .chain()
                                                .focus()
                                                .toggleBold()
                                                .run()
                                        "
                                        :class="{
                                            active: editor.isActive('bold'),
                                        }"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-type-bold"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"
                                            />
                                        </svg>
                                        Negrito
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="#"
                                        @click="
                                            editor
                                                .chain()
                                                .focus()
                                                .toggleItalic()
                                                .run()
                                        "
                                        :class="{
                                            active: editor.isActive('italic'),
                                        }"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-type-italic"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"
                                            />
                                        </svg>
                                        Itálico
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="#"
                                        @click="
                                            editor
                                                .chain()
                                                .focus()
                                                .toggleStrike()
                                                .run()
                                        "
                                        :class="{
                                            active: editor.isActive('strike'),
                                        }"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-type-strikethrough"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z"
                                            />
                                        </svg>
                                        Tachado</a
                                    >
                                </li>
                            </ul>
                        </template>
                    </Dropdown>
                </div>
                <div class="me-5">
                    <Button
                        @click="editor.chain().focus().toggleCode().run()"
                        :class="{ 'btn-info': editor.isActive('code') }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-code-slash"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                            />
                        </svg>
                    </Button>
                    <Button
                        @click="editor.chain().focus().setParagraph().run()"
                        :class="{ 'btn-info': editor.isActive('paragraph') }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-paragraph"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z"
                            />
                        </svg>
                    </Button>
                </div>
                <div class="d-flex">
                    <Button
                        @click="
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 1 })
                                .run()
                        "
                        :class="{
                            'btn-info': editor.isActive('heading', {
                                level: 1,
                            }),
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-type-h1"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"
                            />
                        </svg>
                    </Button>
                    <Button
                        @click="
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 2 })
                                .run()
                        "
                        :class="{
                            'btn-info': editor.isActive('heading', {
                                level: 2,
                            }),
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-type-h2"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z"
                            />
                        </svg>
                    </Button>
                    <Button
                        @click="
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 3 })
                                .run()
                        "
                        :class="{
                            'btn-info': editor.isActive('heading', {
                                level: 3,
                            }),
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-type-h3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
        <div class="row colored">
            <div class="col-22">
                <Button @click="editor.chain().focus().unsetAllMarks().run()">
                    clear marks
                </Button>
                <Button @click="editor.chain().focus().clearNodes().run()">
                    clear nodes
                </Button>

                <Button
                    @click="editor.chain().focus().toggleBulletList().run()"
                    :class="{ 'btn-info': editor.isActive('bulletList') }"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-list-ul"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                        />
                    </svg>
                </Button>
                <Button
                    @click="editor.chain().focus().toggleOrderedList().run()"
                    :class="{ 'btn-info': editor.isActive('orderedList') }"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-list-ol"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
                        />
                        <path
                            d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"
                        />
                    </svg>
                </Button>
                <Button
                    @click="editor.chain().focus().toggleCodeBlock().run()"
                    :class="{ 'btn-info': editor.isActive('codeBlock') }"
                >
                    code block
                </Button>
                <Button
                    @click="editor.chain().focus().toggleBlockquote().run()"
                    :class="{ 'btn-info': editor.isActive('blockquote') }"
                >
                    blockquote
                </Button>
                <Button
                    @click="editor.chain().focus().setHorizontalRule().run()"
                >
                    horizontal rule
                </Button>
                <Button @click="editor.chain().focus().setHardBreak().run()">
                    hard break
                </Button>
                <Button @click="editor.chain().focus().undo().run()"
                    >undo</Button
                >
                <Button @click="editor.chain().focus().redo().run()"
                    >redo</Button
                >
            </div>
        </div>
    </div> -->
    <section class="menu">
        <div class="row no-color">
            <div class="col-md-3 col-sm-12">
                <div class="d-flex justify-content-center">
                    <Button
                        @click="editor.chain().focus().toggleBold().run()"
                        :class="{
                            active: editor.isActive('bold'),
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-type-bold"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"
                            />
                        </svg>
                    </Button>
                    <Button
                        @click="editor.chain().focus().toggleItalic().run()"
                        :class="{
                            active: editor.isActive('italic'),
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-type-italic"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"
                            />
                        </svg>
                    </Button>
                    <Button
                        @click="font = !font"
                        :class="{
                            'active-menu': font,
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-fonts"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
            <div class="col-md-4 col-sm-12c">
                <div class="d-flex justify-content-center">
                    <Button
                        @click="
                            editor.chain().focus().setTextAlign('left').run()
                        "
                        :class="{
                            'is-active': editor.isActive({ textAlign: 'left' }),
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-align-start"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
                            />
                            <path
                                d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z"
                            />
                        </svg>
                    </Button>
                    <Button
                        @click="
                            editor.chain().focus().setTextAlign('center').run()
                        "
                        :class="{
                            'is-active': editor.isActive({
                                textAlign: 'center',
                            }),
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-align-center"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1zm0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5zM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z"
                            />
                        </svg>
                    </Button>
                    <Button
                        @click="
                            editor.chain().focus().setTextAlign('right').run()
                        "
                        :class="{
                            'is-active': editor.isActive({
                                textAlign: 'right',
                            }),
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-align-end"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
                            />
                            <path
                                d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"
                            />
                        </svg>
                    </Button>
                    <Button
                        @click="
                            editor.chain().focus().setTextAlign('justify').run()
                        "
                        :class="{
                            'is-active': editor.isActive({
                                textAlign: 'justify',
                            }),
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-justify"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </Button>
                    <Button
                        @click="editor.chain().focus().toggleBulletList().run()"
                        :class="{ 'is-active': editor.isActive('bulletList') }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-list-ul"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                            />
                        </svg>
                    </Button>
                    <Button
                        @click="
                            editor.chain().focus().toggleOrderedList().run()
                        "
                        :class="{ 'is-active': editor.isActive('orderedList') }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-list-ol"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
                            />
                            <path
                                d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
            <div class="col-md-2 col-sm-12">
                <div class="d-flex justify-content-center">
                    <Button @click="editor.chain().focus().undo().run()"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-arrow-counterclockwise"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                            />
                            <path
                                d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"
                            /></svg
                    ></Button>
                    <Button @click="editor.chain().focus().redo().run()"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-arrow-clockwise"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                            />
                            <path
                                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                            /></svg
                    ></Button>
                </div>
            </div>
        </div>
        <transition name="fade">
            <section>
                <div class="row colored" v-show="font">
                    <div class="d-flex justify-content-center">
                        <Button
                            @click="editor.chain().focus().toggleStrike().run()"
                            :class="{
                                active: editor.isActive('strike'),
                            }"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-type-strikethrough"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z"
                                />
                            </svg>
                        </Button>
                        <Button
                            @click="
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 1 })
                                    .run()
                            "
                            :class="{
                                'btn-info': editor.isActive('heading', {
                                    level: 1,
                                }),
                            }"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-type-h1"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"
                                />
                            </svg>
                        </Button>
                        <Button
                            @click="
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 2 })
                                    .run()
                            "
                            :class="{
                                'btn-info': editor.isActive('heading', {
                                    level: 2,
                                }),
                            }"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-type-h2"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z"
                                />
                            </svg>
                        </Button>
                        <Button
                            @click="
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 3 })
                                    .run()
                            "
                            :class="{
                                'btn-info': editor.isActive('heading', {
                                    level: 3,
                                }),
                            }"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-type-h3"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </section>
        </transition>

        <!-- <div class="col-sm-3 col-md-2 c2 me-3">teste</div>
            <div class="col-sm-3 col-md-2 c3 me-3">teste</div> -->
    </section>
</template>

<script>
import Button from "../form/Button.vue";
import Dropdown from "@/components/forms/Dropdown.vue";

export default {
    props: {
        editor: {
            required: true,
        },
    },
    components: {
        Button,
        // Dropdown,
    },
    data() {
        return {
            font: false,
        };
    },
};
</script>

<style scoped>
.no-color {
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
}
.colored {
    /* background-color: #ededed; */
    background-color: #ddd;
}

.active {
    color: #0298f7;
}

.active-menu {
    color: #0298f7;
    background-color: #ddd;
    border: 0px solid #000;
    border-radius: 0px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.c1 {
    background-color: #c10d32;
}
.c2 {
    background-color: #fc4a4f;
}
.c3 {
    background-color: #fd9372;
}
.c4 {
    background-color: #d1d68b;
}
.c5 {
    background-color: #2aa6a4;
}
</style>