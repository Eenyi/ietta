export let PAGE_NUMBER = 0;
export const colors = [
    "#ff000097",
    "#1e9aff97",
    "#ff964797",
    "#ff1e6997",
    "#bcff1e97",
    "#6a5acd97",
    "#ee82ee97",
]
export const IOB = {
    "B": {
        borderWidth: "0.05rem",
        borderLeftStyle: "solid",
        borderTopStyle: "solid",
        borderBottomStyle: "solid",
        borderRightStyle: "none",
        borderRadius: "0rem 0rem 0rem 0.3rem",
        padding: "2px",
    },
    "I": {
        borderWidth: "0.05rem",
        borderTopStyle: "solid",
        borderBottomStyle: "solid",
        borderRightStyle: "none",
        borderLeftStyle: "none",
        padding: "2px",
    },
    "E": {
        borderWidth: "0.05rem",
        borderRightStyle: "solid",
        borderTopStyle: "solid",
        borderBottomStyle: "solid",
        borderLeftStyle: "none",
        borderRadius: "0rem 0.3rem 0.3rem 0rem",
        padding: "2px",
    },
    "S": {
        borderWidth: "0.05rem",
        borderRightStyle: "solid",
        borderTopStyle: "solid",
        borderBottomStyle: "solid",
        borderLeftStyle: "solid",
        borderRadius: "0rem 0.3rem 0.3rem 0rem",
        padding: "2px",
    },
    "O": {
        borderWidth: "0rem",
        borderRightStyle: "none",
        borderTopStyle: "none",
        borderBottomStyle: "none",
        borderLeftStyle: "none",
        borderRadius: "0rem",
        padding: "2px"
    }
}
export const projectExtension = ".iettax";
export const fileExtension = ".ietta";
export const deleteTopic = "Deletion Process";
export const importTopic = "Import Process";
export const changesLostTopic = "Changes Lost";
export const changesLostText = "Save changes before turning page."
export const homeGraphhead = "Home Page Graphs";
export const projectPageHead = "Project Page";
export const createProjectHead = "Creating a Project";
export const titleBarMenuHead = `Drop Down | Title Bar Menu | Upload File Button`;
export const importExportProjectHead = "Importing / Exporting a Project";
export const addTagsHead = "Adding More Tags";
export const deletingProjectHead = "Deleting a Project";
export const uploadingFileHead = "Uploading a File | [TXT, PDF]";
export const homeGraphDocs = `The two graphs seen on the Home Page display the statistics related to the files and tags 
    in a project. The first one shows number of files for each project as a bar. The second graph displayes the number 
    of tags defined by the user of every project. For the newly registered users who have not yet created any projects, 
    or users who have deleted all their projects will get a greeting message instead of bar graphs.`;
export const projectPageDocs = `The Projects page displays all of your projects. Projects you create or import can be 
    found on this page. Click a project card to open and view it's content. Now if you notice the right bottom corner 
    of the screen you will see a button with the plus (+) sign on it. By clicking it you can create a new project. Also 
    notice the left top corner of the screen you will find three dots on the left of what you can call the title bar of 
    IETTA. By clicking the dots you will see a drop down menu whos options will change depending on the page you are on.`;
export const createProjectDocs = `By clicking on the plus (+) sign button at the bottom right corner of the projects page 
    you will see a form appear before you. This form will request the name you want to give to your new project. Fill the
    name field with what you want your project to be named, remember that the name should be unique, two projects of yours
    cannot have same name. The second field request the tags of your project, you can type as many tags as you want but
    they should be seperated by commas , i.e; firstTag, SecondTag, ThirdTag.`;
export const titleBarMenuDocs = `The drop down menu that will appear after you click the three dots on the left of title
    will provide different options dependinf upon the page you are on. If you are on the Projects page you will get only
    one option which will be "Import Project". The other options will be visible If you have opened a project by clicking 
    on it which will show the files page on which you can view all the files of your project. On the files page you will
    get three options; "Add Tags", "Export Project" and "Delete Project". These three options can be applied on an
    individual project hence, IETTA requires the user to first open a project to view these options. Remember that the 
    plus (+) sign on the bottom right corner of the files page will give you the option to upload a file.`;
export const importExportProjectDocs = `These two are novel features provided by IETTA. The options of Importing and 
    Exporting a project can be found on the title bar menu as stated above. Select the "Import Project" option while
    on the Project's page, this will open a window dialogue box from which you can upload any ( .iettax ) project file 
    you want. Uploading a non-altered ( .iettax ) project file will import a project successfully. Exporting a project 
    requires you to open the project you want to export, select the "Export Project" option, IETTA will download a 
    secured and protected ( .iettax ) file of your project on your local storage. Now you can send that ( .iettax )
    file to the person you wanted to share your project with. In simple words, exporting a project means having a 
    shareable file of your project which you can share with the person you wanted and importing a project means to be
    able to import that shareable project file and make it one of your own projects.`;
export const addTagsDocs = `As you have seen that while creating a project you can enter as many tags as you want
    however, if you want to add some more tags or you forgot to add some tags on the time of project creation you can
    do so by selecting the "Add Tags" option from the title bar menu. This will open a window on which you can view your
    added tags and also you can add more tags on the field at the top of the window. You can add tags the same way you did
    at the time of project creation, seperated by commas, i.e; FouthTag, FifthTag, SixthTag.`;
export const deletingProjectDocs = `Another feature provided is the deletion of an existing project by selecting the 
    "Delete Project" option from the title bar menu. After selecting the option you will see a conformation window appear
    before you. This window will have an important text to read and a check box. You will be provided with the delete
    button (Red in color) only when you have checked the check box which will mean your conformance and understanding of
    the risk of deleting a project. Clicking the red delete button will remove the project and all of it's data. You will
    not be able to recover the project or its contents after deletion.`;
export const uploadingFileDocs = `To upload a file against an individual project you need to open that project by clicking 
    on card having the name of that project. With this you will enter the files page which will show all the files of that
    project. To upload a file here you need to click on the plus (+) sign button at the bottom right corner of the screen. 
    Now you will see a form appear before you which will request a name for the file you want to upload. Enter the name 
    and click on the second field which will open a windows dialogue box. From there you can select any text or PDF file
    you want to upload. Remember that IETTA only supports pure text files or PDF format files with extension .txt or .pdf, 
    IETTA will be able to support more file formats in the future.`;
export const editor = "Editor";
export const featuresInEditor = "Feature in the Editor";
export const titleBarMenuEditor = "Add Tags while Tagging";
export const singleWordTag = "Tagging a Single Word";
export const multipleWordTag = "Tagging Multiple Words";
export const removingTag = "Remove Taggings";
export const featuresInEditorDocs = `When you click on a file card you will enter the editor mode. IETTA will provide the
    content of the clicked file in an editor with pagination. Remember that IETTA Editor's page parses 40 lines at a time
    hence, the file's content will be divided into 40 lined pages depending upon the number of lines in the file. On the 
    right top corner of the editor you can view all the tags of the project that file exists in. Also each tag will be 
    grouped with a color to give a comfortable tagging experience. At the right bottom corner there will be a field and a 
    button, the field will show the current page number, as it is a field you can enter the desired page number you want
    to jump to. Enter the page number with the total page range and click on the "Jump to Page" button. The editor will 
    take you to your desired page. At the right middle part you'll see a theme colored double tick. This denotes that the 
    file hasn't been altered. If you alter the file, perform tagging, the double ticks will be replaced by a saved button. 
    The changes you have made will be saved only when you have clicked on that button. Once the button is clicked and the 
    changes are saved the doubles ticks will reappear again.`;
export const titleBarMenuEditorDocs = `The title Bar Menu or the drop down menu is visible in the IETTA Editor too, you 
    add tags while your sitting in the IETTA Editor, also you can export or delete the project too. Consider while you're
    tagging the document and you realize that there need to be one or more tags, you can add them from the title bar menu.`;
export const singleWordTagDocs = `IETTA Editor provides a context menu which will appear when you right click on a word
    , if it is a single word you only need to right click on it and a theme colored context menu will appear which will
    have all the tags. By selecting a desired tag that word will be higlighted with the tag's color and the tag name will
    appear as a superscript of that word. This will make the save button appear and the tagging won't be saved until you
    click on that save button.`;
export const multipleWordTagDocs = `Just like tagging a single word, you can tag multiple words or even a whole sentence. 
    In order to do this you need to select those multiple words or the sentence just like you select text in a document. 
    You will left click at the start of the first word of your sentence and hold the click, then you drag until the last 
    word of your sentence and right click at the "middle" or "start" of the theme colored selected text. This will open 
    the context menu. Now you can select the tag you want. Save the tagging by clicking the save button.`;
export const removingTagDocs = `The tagging, either single word or multiple word can be removed. In the context menu that
    appears when you right click on a single word or select multiple words and right click, you can see an option "Remove"
    that appears after you scroll to the bottom of that menu. This "Remove" option is distinguished by a horizontal line 
    after the tags. Click on the "Remove" option and your tagging will be removed, just that this also comes within the 
    term of altering or changing the files, hence you will have to click on the save button to secure your changes.`;
export const prerequisite = "Prerequisites";
export const cloneRepos = "Clone | Fork Github Repositories";
export const npmIPackages = "Install Node Packages";
export const pipIPackages = "Install Python Packages";
export const javaInstall = "Java Required for Parser";
export const prerequisiteDocs = `The application of IETTA has it's front end written in React Js with Redux Js and its 
    backend is written in variant of Flask known as FlaskRestX. This "Setup" page was designed to guide developers who
    want to constribute or host or work with IETTA. This was a final year project that was designed by university students
    with no financial revenue motives hence, the creators appreciate you to take IETTA forward and add your talent to it. 
    You will be required to have Node JS, Python and Java Runtime Environment on your system`;
export const cloneReposDocs = `Both the Front End and Backend Github Repositories are public and can be forked or Cloned. 
    You can find a user names "huzaifausmani" on github who is the creator of the two repositories. The front end repository
    is named "NIETTA", (this name was to be the original name of the application but the first letter 'N' was removed hence 
    the name IETTA, the removal of 'N' was a mutual desicion and agreed by the creator) the backend repository is named as
    IETTA_Server.`;
export const npmIPackagesDocs = `After cloning the front end repository NIETTA you just need to run "npm i" or "npm install"
    from the terminal or CMD. The application will read the required packages from "package.json" file and install all the
    required node modules and packages. After this you can run "npm start" from the terminal or CMD and IETTA front end 
    will began running.`;
export const pipIPackagesDocs = `Setting up Backend wont be as easy as front end as you will have to install the following
    python packages using "pip". The python packages and modules are; flask, flask_cors, flask_mail, flask_restx, werkzeug.utils,
    zipfile, tika, typing, jwt, cryptography.fernet, bson, json, flask_pymongo. After this you can run "python main.py" 
    from terminal or CMD and IETTA backend will be up and running.`;
export const javaInstallDocs = `The need to install java is only because of the pdf parser in use which is "TIKA". This 
    module requires java runtime environment on the host machine so that the conversion of pdf to text is possible.`;