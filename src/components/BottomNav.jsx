import GithubIcon from "../assets/github.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";
import MailIcon from "../assets/mail.svg?react";
import DownloadIcon from "../assets/download.svg?react";

function BottomNav() {
  return (
    <nav id="bottom-nav">
      <a href="https://github.com/nncole" target="_blank" aria-label="GitHub">
        <GithubIcon className="nav-icon" />
      </a>

      <a href="https://linkedin.com/in/sancheznncole" target="_blank" aria-label="LinkedIn">
        <LinkedinIcon className="nav-icon" />
      </a>

      <a href="mailto:sancheznncole@gmail.com" aria-label="Mail">
        <MailIcon className="nav-icon" />
      </a>

      <div className="nav-div"></div>

      <a href="#" aria-label="Download Resume">
        <DownloadIcon className="nav-icon" />
      </a>
    </nav>
  );
}

export default BottomNav;